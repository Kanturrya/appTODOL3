import { createStore } from vuex;

import account from "./account";
import todolist from "./todolist";

export const store = createStore({
    debug: true,
    modules: {
        account,
        todolist
    }
});