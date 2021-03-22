import axios from "axios";
import { router } from '/src/router/index';

export const register = ({commit}, user) => {
    console.log(user);
    axios.post('http://138.68.74.39/api/register', user)
    .then(response => {
        console.log(response.data);
        commit('SET_TOKEN', response.data.token);
        localStorage.setItem('token', response.data.token);
        router.push({name: 'HomeBase'});
    }).catch((error) => {
        console.log(error);
    });
}

export const login = ({commit}, user) => {
    
    axios.post(`http://138.68.74.39/api/login`, user)
    .then(response => { 
        console.log(response.data);
        commit('SET_TOKEN', response.data.token);
        localStorage.setItem('token', response.data.token);
        router.push({name: 'HomeBase'});
    }).catch((error) => {
        console.log(error);
    });
}

//User id 147
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

export const logout = ({commit}) => {
    commit('RESET', '');
}