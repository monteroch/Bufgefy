const initialState = {
    user: null,
    error: null
};

function rootReducer(state = initialState, action){
    switch(action.type){
        case "LOGIN_SUCCESS":
            return{
                ...state,
                user: action.payload
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
        default:
            return state
    }
};

export default rootReducer;