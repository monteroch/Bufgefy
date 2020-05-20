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

export const getUserRequest = (uid) => ({
    type: 'GET_USER_REQUEST',
    payload: uid
});

export const getUserSuccess = (user) => ({
    type: 'GET_USER_SUCCESS',
    payload: user
});

export const getUserFailure = (error) => ({
    type: 'GET_USER_FAILURE',
    payload: error
});