export function SET_COMPLETED(state, val) {
    state.todos.isCompleted = val;
}

export function deleteTodo (state, [idList, idTodo]) {
    state.todolists[idList - 1].todos.splice(idTodo - 1, 1);
}

export function addTodo (state, [idList, newTodo]) {
    // Si la nouvelle todo est vide on ne l'ajoute pas
    if (! newTodo == "") {
        state.todolists[idList - 1].todos.push({id: idList, name: newTodo, isCompleted: false});
    }
}

export function addList (state, newList) {
    let valueId;
	if (state.todolists.length > 0) {
		valueId = state.todolists[state.todolists.length - 1].id + 1;
	} else {
		valueId = 1;
	}
	state.todolists.push({id: valueId, name: newList, todos: []});
}