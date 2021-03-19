import axios from "axios";

//Refresh la liste
export function refreshTodos(context) {
    context.commit('SET_TODOS_REF');
}

//Retourne les listes du user
export const fetchTodolists = ({commit}) => {
    axios.get(`http://138.68.74.39/api/todolists`,{
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token')
        }
    })
    .then(response => {
        console.log(response.data);
        localStorage.setItem('todolists', JSON.stringify(response.data));
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
        let todolists = JSON.parse(localStorage.getItem('todolists'));
        response.data.nb_todos = 0;
        response.data.todos = [];
        console.log(response.data)
        todolists.push(response.data);
        localStorage.setItem('todolists', JSON.stringify(todolists));
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
        let todolists = JSON.parse(localStorage.getItem('todolists'));
        let index = todolists.findIndex(todolist => todolist.id == id);
        todolists.splice(index, index + 1);
        localStorage.setItem('todolists', JSON.stringify(todolists));
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
        let todolists = JSON.parse(localStorage.getItem('todolists'));
        let index = todolists.findIndex(todolist => todolist.id == response.data.todolist_id);
        response.data.completed = 0;
        todolists[index].todos.push(response.data);
        todolists[index].nb_todos = todolists[index].nb_todos + 1;
        localStorage.setItem('todolists', JSON.stringify(todolists)); 
        commit('SET_TODOS_ADD', response.data);
        commit('SET_MSG', response.data.message);
    }).catch((error) => {
        console.log(error.response);
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
        let todolists = JSON.parse(localStorage.getItem('todolists'));
        let indexList = todolists.findIndex(todolist => -1 < todolist.todos.findIndex(todo => todo.id == id));
        let indexTodo = todolists[indexList].todos.findIndex(todo => todo.id == id);
        todolists[indexList].todos.splice(indexTodo, indexTodo + 1);
        todolists[indexList].nb_todos = todolists[indexList].nb_todos - 1;
        localStorage.setItem('todolists', JSON.stringify(todolists));
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
        let todolists = JSON.parse(localStorage.getItem('todolists'));
        let indexList = todolists.findIndex(todolist => todolist.id == response.data.todolist_id);
        let indexTodo = todolists[indexList].todos.findIndex(todo => todo.id == response.data.id);
        if (todolists[indexList].todos[indexTodo].completed == 0) {
            todolists[indexList].todos[indexTodo].completed = 1;
        } else {
            todolists[indexList].todos[indexTodo].completed = 0;
        }
        localStorage.setItem('todolists', JSON.stringify(todolists));
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
        let todolists = JSON.parse(localStorage.getItem('todolists'));
        let indexList = todolists.findIndex(todolist => todolist.id == response.data.todolist_id);
        let indexTodo = todolists[indexList].todos.findIndex(todo => todo.id == response.data.id);
        todolists[indexList].todos[indexTodo] = response.data;
        localStorage.setItem('todolists', JSON.stringify(todolists));
        commit('SET_TODOS_MOD', response.data);
    }).catch((error) => {
        console.log(error);
        commit('SET_MSG', "Erreur lors de la modification du Todo " + todo.name + "!");
    });
}