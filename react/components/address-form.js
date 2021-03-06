import React, { Component, PropTypes } from 'react'

import uiHelper from '../../utils/ui-helper'
import { Input } from '../elements/input'
import { DataSelect } from '../elements/select'


class AddressForm extends Component {

    constructor(props) {
        super(props)
    }

    render = () => {
        let stateEle = {
            name: uiHelper.makeName(this.props.namePrefix, "state"),
            value: uiHelper.valOr(this.props.address.state),
            required: this.props.address.required,
            onChange: this.props.onChange
        }

        let countryEle = {
            name: uiHelper.makeName(this.props.namePrefix, "country"),
            value: uiHelper.valOr(this.props.address.country),
            required: this.props.address.required,
            onChange: this.props.onChange
        }



        return (
            <ul className="form-list">
                <li className="l_half">
                    <label className="required">Address line 1</label>
                    <Input className="input-text"
                            type="text"
                            name={uiHelper.makeName(this.props.namePrefix, "address_line_1")}
                            value={uiHelper.valOr(this.props.address.address_line_1)}
                            onChange={this.props.onChange}
                            required={this.props.address.required}
                            />
                </li>
                <li className="l_half l_last">
                    <label className="required">Address line 2</label>
                    <Input className="input-text"
                            type="text"
                            name={uiHelper.makeName(this.props.namePrefix, "address_line_2")}
                            value={uiHelper.valOr(this.props.address.address_line_2)}
                            onChange={this.props.onChange}
                            />
                </li>
                <li className="l_half ">
                    <label className="required">Suburb</label>
                    <Input className="input-text"
                            type="text"
                            name={uiHelper.makeName(this.props.namePrefix, "suburb")}
                            value={uiHelper.valOr(this.props.address.suburb)}
                            onChange={this.props.onChange}
                            required={this.props.address.required}
                            />
                </li>
                <li className="l_span_3">
                    <label className="required">State</label>
                    { DataSelect('ausState')(stateEle) }
                </li>
                <li className="l_span_3 l_last">
                    <label className="required">Post code</label>
                    <Input className="input-text"
                            type="number"
                            name={uiHelper.makeName(this.props.namePrefix, "postcode")}
                            value={uiHelper.valOr(this.props.address.postcode)}
                            onChange={this.props.onChange}
                            required={this.props.address.required}
                            maxLength={10}
                            />
                </li>
                <li className="l_full">
                    <label className="required">Country</label>
                    { DataSelect('country')(countryEle) }
                </li>
            </ul>
        )
    }
}

AddressForm.PropTypes = {
    namePrefix: PropTypes.string,
    address: PropTypes.object
}

AddressForm.defaultProps = {
      address: {}
}

export default AddressForm
