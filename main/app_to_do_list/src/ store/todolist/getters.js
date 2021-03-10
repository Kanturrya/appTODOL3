import todolist from ".";

export function getSize(state){
    return state.todolist.size;
}

export function getAll(state){
    return state.todolist;
}

export const getTodoFromId = (state) => (id) => {
    return state.infos.find((todolist) => todolist.id === id);
}