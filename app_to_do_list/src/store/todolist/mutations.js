export function SET_COMPLETED(state, val) {
    state.todos.isCompleted = val;
}

export function DELETE_TODO(state, [indexList, indexTodo]) {
    state.todolists[indexList].todos.splice(indexTodo, 1);
}

export function ADD_TODO(state, [indexList, idTodo, newTodo]) {
    state.todolists[indexList].todos.push({id: idTodo, name: newTodo, isCompleted: false});
}

export function ADD_LIST (state, [idList, newList]) {
	state.todolists.push({id: idList, name: newList, todos: []});
}