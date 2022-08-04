
const initialState = {
    users: null,
    loggedInUser: null,
    currUser: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.users };

        case 'SET_USER':
            return { ...state, currUser: action.user };

        case 'SET_LOGGED_IN_USER':
            return { ...state, loggedInUser: action.user };

        case 'SAVE_USER':
            return { ...state, users: [...state.users.filter(user => user._id !== action.user._id), action.user] };

        case 'REMOVE_USER':
            return { ...state, users: [...state.users.filter(user => user._id !== action.user._id)] };

        default:
            return state;
    }
}