import 'whatwg-fetch'

import logger from '../logger'


/**
 * create standard sync actions
 * @param string type actiontypes
 */
export function makeActionCreator(type, ...argNames) {
    return function(...args) {
        let action = { type }
        argNames.forEach((arg, index) => {
            action[argNames[index]] = args[index]
        })
        return action
    }
}

/**
 * using ES6 fetch
 * for URI access
 *
 * usage:
 *
 * store.dispatch(fetchUri('https://example.com/blah')(
 *  {
 *      subject: blah,
 *      params: {
 *          method: 'POST',
 *          headers: {'Content-Type': 'application/json'},
 *          body: data
 *      },
 *      receiveSubject: receiveBlah
 * })
 */
export const fetchUri = uri => action => {
    const {
        subject = null,
        params = {
            method: 'GET',
            mod: 'cors',
            cache: 'default',
            body: {}
        },
        requestSubject = null,
        receiveSubject,
        onFailure = (error) => logger.log(error, 'error')
    } = action

    if (requestSubject !== null && typeof receiveSubject != 'function') {
        throw new Error('Expected receiveSubject is a function')
    }

    return dispatch => {
        if (requestSubject !== null) {
            dispatch(requestSubject(subject))
        }

        return fetch(uri, params)
            .then(response => response.status == 204 ? null : response.json())
            .then(json => dispatch(receiveSubject(json, subject)))
            .catch(onFailure)
    }
}


/**
 * switch-free redux reducer creation
 *
 * usage:
 *
 * export default createReducer(defaultState, {
 *    [ACTION_TYPE_1]: require('/path/to/action/1').default,
 *    [ACTION_TYPE_2]: require('/path/to/action/2').default
 * })
 */
export const createReducer = (defaultState, reducers) => (state, action) => {
    const newState = state || defaultState
    const reducer = reducers[action.type]

    return reducer ? reducer(newState, action) : newState
}
