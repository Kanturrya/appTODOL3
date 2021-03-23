export function getAll() {
    return JSON.parse(localStorage.getItem('todolists'));
    //    return state.todolists;
}

export function getMessage(state) {
    return state.message;
}

export const filterTodos = (state) => (filter) => {
    let i = 0;
    state.todos.forEach(element => {
        if(element.completed === 1){
          state.todos[i].completed = true;
        }
        i++;
    });
    if(filter === "unchecked") {
        return state.todos.filter(todo => ! todo.completed);
    } else if (filter === "checked") {
        return state.todos.filter(todo => todo.completed);
    } else {
        return state.todos;
    }
}

export const remainingTodos = (state) => {
    let i = 0
    state.todolists.forEach(list => {
        console.log(list.name)
        i = i + list.todos.filter(todo => !todo.completed).length
    });
    return i

}

export const getNameList = (state) => (idList) => {
    if (state.todolists[state.todolists.findIndex(todolist => todolist.id == idList)] == undefined) {
        let todolists = JSON.parse(localStorage.getItem('todolists'));
        return todolists[todolists.findIndex(todolist => todolist.id == idList)];
    } else {
        return state.todolists[state.todolists.findIndex(todolist => todolist.id == idList)].name;
    }
}
