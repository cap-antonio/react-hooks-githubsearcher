export const SHOW_ALERT = 'SHOW_ALERT'
export const HIDE_ALERT = 'HIDE_ALERT'

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    default: state => state
}

export const AlertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.default
    return handler(state, action)
}