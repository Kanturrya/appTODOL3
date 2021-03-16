import axios from "axios";

//Retourne les listes du user
export const fetchTodolists = ({commit}) => {
    axios.get(`http://138.68.74.39/api/todolists`,{
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        commit('SET_TODOLISTS', response.data);
    }).catch((error) => {
        commit('SET_MSG', error.response);
    });
}

//Retourne les todos d'une liste
export const fetchTodos = ({commit}, id) => {
    axios.get(`http://138.68.74.39/api/todos/`+id,{
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        commit('SET_TODOS', response.data);
    }).catch((error) => {
        commit('SET_MSG', error.response.data.error);
    });
}

//Pour créer une liste pour un user
export const createTodolist = ({commit}, name) => {
    axios.post(`http://138.68.74.39/api/todolist`, {name: name}, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        commit('SET_TODOLISTS_ADD', response.data);
    }).catch((error) => {
        commit('SET_MSG', error.response.data.error);
    });
}

//Pour supprimer une todolist 
export const deleteTodolist = ({commit}, id) => {
    axios.delete(`http://138.68.74.39/api/todolist/`+id, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        commit('SET_TODOLISTS_DEL', id);
        commit('SET_MSG', response.data.message);
    }).catch((error) => {
        commit('SET_MSG', error.response.data.message);
    });
}

//Pour ajouter un todo à une liste
export const createTodo =({commit}, todo) => {
    axios.post(`http://138.68.74.39/api/todo`, todo, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        commit('SET_TODOS_ADD', response.data);
        commit('SET_MSG', response.data.message);
    }).catch((error) => {
        commit('SET_MSG', error.response.data.message);
    });
}

//Pour delete un todo d'une une liste
export const deleteTodo =({commit}, id) => {
    axios.delete(`http://138.68.74.39/api/todo/`+id, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        commit('SET_TODOS_DEL', id);
        commit('SET_MSG', response.data.message);
    }).catch((error) => {
        commit('SET_MSG', error.response.data.message);
    });
}

//Complete todo ???
export const completeTodo = ({commit}, todo) => {
    axios.post(`http://138.68.74.39/api/completeTodo/`+todo.id, todo, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        commit('SET_TODOS_MOD', response.data);
    }).catch((error) => {
        commit('SET_MSG', error + "\nErreur lors de la modification du Todo " + todo.name + "!");
    });
}

//Pour modifier un todo
export const modifTodo = ({commit}, todo) => {
    console.log(todo.id, todo.name, todo.completed, todo.todolist_id);
    axios.patch(`http://138.68.74.39/api/todo/`+todo.id, todo, {
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        commit('SET_TODOS_MOD', response.data);
    }).catch((error) => {
        console.log(error);
        commit('SET_MSG', "Erreur lors de la modification du Todo " + todo.name + "!");
    });
}