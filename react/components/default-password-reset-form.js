import React from 'react'


/**
 * default password reset form
 * can swap password reset wrapper
 */
const DefaultPasswordResetForm = (PasswordResetComponent, context) => (
    <PasswordResetComponent>
    {
        //callback is the PasswordResetComponent scope this
        (callback) => (
            <form className={context.theme.passwordResetForm} onSubmit={callback.sendCode}>
                <fieldset>
                <ul className={context.theme.ul}>
                    <li className={context.theme.error}>
                        <label className={context.theme.required}  id="">Email address</label>
                        <input type="email" className={context.theme.inputText}
                            onChange={callback.setStateVal} name="email" id="email" required="" />
                        <div className={context.theme.error}>Please enter an email address</div>
                    </li>
                    <li className={context.theme.success}>
                        <p>If this is a valid account, your email is on its way!</p>
                    </li>
                    <li className="clearfix">
                        <ul>
                            <li className="l_half">
                                <div className="buttons-set">
                                    <button className="btn btn_clear" id="cancel" onClick={callback.cancelReset}>Cancel</button>
                                </div>
                            </li>
                            <li className="l_half l_last">
                                <div className="buttons-set">
                                    <button className="btn" type="submit" id="send">Send Email</button>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                </fieldset>
            </form>
        ) 
    }
    </PasswordResetComponent>
)


export default DefaultPasswordResetForm