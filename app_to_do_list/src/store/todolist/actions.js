export function setIsCompleted(context, val) {
    context.commit('SET_COMPLETED', val);
}

export function deleteTodo(context, [idList, idTodo]) {
    context.commit('DELETE_TODO', [context.getters.getIndexList(idList), context.getters.getIndexTodo(idList, idTodo)]);
}

export function addTodo(context, [idList, newTodo]) {
    // Si la nouvelle todo est vide on ne l'ajoute pas
    if (! newTodo == "") {
        let idTodo = 1;
        if (context.getters.getIdLastTodo(idList) != null) {
            idTodo = context.getters.getIdLastTodo(idList) + 1;
        }
        context.commit('ADD_TODO', [context.getters.getIndexList(idList), idTodo, newTodo]);
    }
}

export function addList(context, newList) {
    // Si la nouvelle liste est vide on ne l'ajoute pas
    if (! newList == "") {
        let idList = 1;
        if (context.getters.getIdLastList != null) {
            idList = context.getters.getIdLastList + 1;
        }
        context.commit('ADD_LIST', [idList, newList]);
    }
}

