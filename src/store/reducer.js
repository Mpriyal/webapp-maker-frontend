let initialState = { user: JSON.parse(localStorage.getItem('user')), loggedIn: localStorage.getItem('user')};
JSON.parse(localStorage.getItem('user'));

const reducer = (state = initialState, action) => {
    if (action.type === 'LOGIN'){
        localStorage.setItem('user', JSON.stringify(action.user));
        return {
            ...state,
            loggedIn: true,
            user: action.user
        }
    }else{
        if (action.type === 'LOGOUT'){
            localStorage.clear();
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
