export function getAll(state) {
    return state.todolists;
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
        return state.todos.filter(todo => !todo.completed);
    } else if (filter === "checked") {
        return state.todos.filter(todo => todo.completed);
    } else {
        return state.todos;
    }
}