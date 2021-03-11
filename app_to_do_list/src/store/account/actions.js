import axios from "axios";

export const register = ({commit}, nameAccount, emailAccount, passwordAccount) => {
    axios.post(`http://138.68.74.39/api/register`, {nameAccount, emailAccount, passwordAccount})
    .then(response => {
        console.log(response.data);
        commit('SET_TOKEN', response.data.token);
        localStorage.setItem('token', response.data.token);
    });
}

export const login = ({commit}, emailAccount, passwordAccount) => {
    axios.post(`http://138.68.74.39/api/login`, {emailAccount, passwordAccount})
    .then(response => {
        console.log(response.data);
        commit('SET_TOKEN', response.data.token);
        localStorage.setItem('token', response.data.token);
    });
}

export const fetchUser = ({commit}) => {
    axios.get(`http://138.68.74.39/api/user`, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        commit('SET_USER', response.data);
    });
}