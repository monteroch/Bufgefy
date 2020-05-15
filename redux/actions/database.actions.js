export const saveUserRequest = (user) => ({
    type: 'SAVE_USER_REQUEST',
    payload: user
});

export const saveUserSuccess = (user) => ({
    type: 'SAVE_USER_SUCCESS',
    payload: user
});

export const saveUserFailure = (error) => ({
    type: 'SAVE_USER_FAILURE',
    payload: error
});