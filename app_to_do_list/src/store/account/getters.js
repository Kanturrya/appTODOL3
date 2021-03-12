export function isLoggedIn(state) {
    return state.token;
}

export function getUser(state) {
    return state.user;
}