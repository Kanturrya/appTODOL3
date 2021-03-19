export function SET_TODOS_REF(state) {
    state.todos = [];
}

export function SET_TOKEN_TODOLISTS(state, token_todolists) {
    state.token_todolists = token_todolists;
}

export function SET_TODOLISTS(state, todolists) {
    state.todolists = todolists;
}

export function SET_TODOLISTS_ADD(state, todolist) {
    state.todolists.push(todolist);
}

export function SET_TODOLISTS_DEL(state, id) {
    let index = state.todolists.map(todolists => {
        return todolists.id;
    }).indexOf(id);
    state.todolists.splice(index, 1);
}

export function SET_TODOS(state, todos) {
    state.todos = todos;
}

export function SET_TODOS_ADD(state, todo) {
    state.todos.push(todo);
}

export function SET_TODOS_DEL(state, id) {
    let index = state.todos.map(todo => {
        return todo.id;
    }).indexOf(id);
    state.todos.splice(index, 1);
}

export function SET_TODOS_MOD(state, todo) {
    let index = state.todos.map(_todo => {
        return _todo.id;
    }).indexOf(todo.id);
    state.todos.splice(index, todo);
    console.log(state.todos);
}

export function SET_MSG(state, message) {
    state.message = message;
}