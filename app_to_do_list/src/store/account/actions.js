import Axios from "axios";

export function login(context, state, token, user) {

    context.commit('SET_TOKEN', token);
    context.commit('SET_USER', user);

    Axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;
}

export function logout(context) {
    context.commit('RESET', '');
}