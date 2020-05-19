export const loginRequest = (user) => ({
    type: 'LOGIN_REQUEST',
    payload: user
});

export const loginSuccess = (userId) => ({
    type: 'LOGIN_SUCCESS',
    payload: userId
});

export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: user
});

export const createAccountRequest = (user) => ({
    type: 'CREATE_ACCOUNT_REQUEST',
    payload: user
});

export const createAccountSuccess = (user) => ({
    type: 'CREATE_ACCOUNT_SUCCESS',
    payload: user
});

export const createAccountFailure = (error) => ({
    type: 'CREATE_ACCOUNT_FAILURE',
    payload: error
});

export const signOutRequest = () => ({
    type: 'SIGN_OUT_REQUEST'
});

export const signOutSuccess = () => ({
    type: 'SIGN_OUT_SUCCESS'
});

export const signOutFailure = () => ({
    type: 'SIGN_OUT_FAILURE',
    payload: error
});