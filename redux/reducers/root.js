const initialState = {
    user: null,
    userId: null,
    error: null
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case "LOGIN_SUCCESS":
            return{
                ...state,
                userId: action.payload
            }
        case "LOGIN_FAILURE":
            return{
                ...state,
                error: action.error
            }
        case "CREATE_ACCOUNT_FAILURE":
            return{
                ...state,
                error: action.error
            }
        case "SAVE_USER_SUCCESS":
            return{
                ...state,
                user: action.payload
            }
        case "SAVE_USER_FAILURE":
            return{
                ...state,
                error: action.error
            }
        case "SIGN_OUT_SUCCESS":
            return{
                ...state,
                user: null,
                error: null
            }
        case "SIGN_OUT_FAILURE":
            return{
                ...state,
                error: action.error
            }
        case "GET_USER_SUCCESS":
            return{
                ...state,
                user: action.payload,
                error: null
            }
        case "GET_USER_FAILURE":
            return{
                ...state,
                error: action.error
            }  
        default:
            return state
    }
};

export default rootReducer;