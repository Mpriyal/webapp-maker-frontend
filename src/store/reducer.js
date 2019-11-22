const initialState = { loggedIn: false, user: null}

const reducer = (state= initialState, action) => {
    if (action.type === 'LOGIN'){
        return {
            ...state,
            loggedIn: true,
            user: action.user
        }
    }else{
        if (action.type === 'LOGOUT'){
            return {
                ...state,
                loggedIn: false,
                user: null
            }
        }
    }
    return state
};

export default reducer;
