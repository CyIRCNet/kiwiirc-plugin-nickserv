let data = {
    LoginText: 'Log into an account',
    RegisterText : 'Register the nickname currently in use:',
    RegButton: 'REGISTER',
    IDText : 'The chosen nick is registered, enter the password to authenticate.',
    IDButton : 'LOGIN',
    ConfirmReqText : 'Enter the confirmation code received by email to complete the account registration.',
    ConfirmButton : 'CONFIRM REGISTRATION'
};

export function getString(key) {
    return data[key];
}
