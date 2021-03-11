export function getAll(state) {
    return state.todolists;
}

export function getSize(state) {
    return state.todolists.length;
}

export const getSizeTodos = (state) => (idList) => {
    return state.todolists.findIndex(list => list.id == idList).todos.length;
}

export const getTodolistFromId = (state) => (idList) => {
    return state.todolists[idList - 1];
}

export const getIndexList = (state) => (idList) => {
    return state.todolists.findIndex(list => list.id == idList);
}

export const getIndexTodo = (state) => (idList, idTodo) => {
    return state.todolists[state.todolists.findIndex(list => list.id == idList)].todos.findIndex(todo => todo.id == idTodo)
}

export function getIdLastList(state) {
    if (state.todolists.length == 0) {
        return null
    } else {
        return state.todolists[state.todolists.length - 1].id;
    }
}

export const getIdLastTodo = (state) => (idList) => {
    let index = state.todolists.findIndex(list => list.id == idList);
    if (state.todolists[index].todos.length == 0) {
        return null;
    } else {
        return state.todolists[index].todos[state.todolists[index].todos.length - 1].id;
    }
}

export const filteredTodos = (state) => (idList, filter) => {
    if (filter == "unchecked") {
        return state.todolists[idList - 1].todos.filter(todo => ! todo.isCompleted);
    } else if (filter == "checked") {
        return state.todolists[idList - 1].todos.filter(todo => todo.isCompleted);
    }
    return state.todolists[idList - 1].todos;
}

export const countUndoneTodos = (state) => (idList) => {
    return state.todolists[idList - 1].todos.filter(todo => ! todo.isCompleted).length;
}