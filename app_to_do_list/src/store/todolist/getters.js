export function getSize(state) {
    return state.todolists.size;
}

export function getAll(state) {
    return state.todolists;
}

export const getTodolistFromId = (state) => (idList) => {
    return state.todolists[idList - 1];
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