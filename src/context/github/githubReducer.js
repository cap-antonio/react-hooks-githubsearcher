export const CLEAR_USERS = 'CLEAR_USERS'
export const GET_REPOS = 'GET_REPOS'
export const GET_USER = 'GET_USER'
export const SEARCH_USERS = 'SEARCH_USERS'
export const SET_LOADING = 'SET_LOADING'

const handlers = {
    [CLEAR_USERS]: (state) => ({
        ...state,
        users: [],
        loading: false
    }),
    [GET_REPOS]: (state, {payload}) => ({
        ...state,
        repos: payload,
        loading: false
    }),
    [GET_USER]: (state, {payload}) => ({
        ...state,
        user: payload,
        loading: false
    }),
    [SEARCH_USERS]: (state, {payload}) => ({
        ...state,
        users: payload,
        loading: false
    }),
    [SET_LOADING]: (state) => ({ 
        ...state,
        loading: true
    }),
    default: state => state
}

export const GithubReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.default
    return handler(state, action)
}