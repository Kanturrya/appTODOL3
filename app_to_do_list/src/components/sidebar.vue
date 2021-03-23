<template>
  <aside class="aside">
    <nav class="navigation" role="navigation">
      <div class="titleList">
        <h1>Vos Listes ( {{ remainingTodos }} tâches à faire au total )</h1>
      </div>
      <!--Créer une liste -->
      <div class="newList">
        <input type="text" v-model="newList" placeholder="Ajouter une liste" @keyup.enter="eventAddList"/>
        <router-link class="add" :to="'/home/0'">
          <button @click="eventAddList">Ajouter</button>
        </router-link>
      </div>
      <div class="allList">
        <ul class="navigation-list">
          <li
            class="navigation-item"
            v-for="todo in todolists"
            v-bind:key="todo.id"
          >
            <router-link :to="'/home/' + todo.id" class="navigation-link">
              <p v-on:click="selectList(todo.id)">
                {{ todo.name }} (
                {{ todo.todos.filter((todo) => !todo.completed).length }} tâches
                à faire )
              </p>
            </router-link>
            <router-link :to="'/home/' + 0" class="navigation-link">
              <div class="delete">
                <button @click="deleteTodolist(todo.id)">Supprimer</button>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="msg">
      <h4>{{ getMessage }}</h4>
    </div>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "Sidebar",

  data() {
    return {
      currentList: "",
      modif: false,
      newList: "",
      filter: "all",
    };
  },

  methods: {
    ...mapActions("todolist", [
      "refreshTodos",
      "fetchTodos",
      "createTodolist",
      "deleteTodolist",
    ]),

    selectList(id, name) {
      console.log("select liste : " + id);
      this.refreshTodos();
      this.currentList = name;
      this.fetchTodos(id);
    },

    eventAddList() {
      this.createTodolist(this.newList);
      this.newList = "";
    },
  },

  computed: {
    ...mapState("todolist", ["todolists", "todos"]),
    ...mapGetters("todolist", ["filterTodos", "getMessage", "remainingTodos"]),
  },
};
</script>

<style>
.navigation-list {
  list-style-type: none;
  padding: 0;
}

.navigation-link {
  cursor: pointer;
  text-decoration: none;
  color: rgb(51, 51, 51);
  font-size: 14px;
}

.navigation-link :hover {
  font-weight: bold;
}

.navigation {
  width: 40vw;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
}

.navigation h1 {
  padding: 0;
  color: black;
  text-align: center;
}

.titleList {
  padding: 5px;
  background: #00d1b2;
  margin-bottom: 30px;
}

.navigation .newList {
  position: relative;
  padding: 0 15% 20px;
}

.allList {
  padding: 0 15% 40px;
}

.navigation .newList input {
  width: 90%;
  padding: 10px 10px;
  font-size: 16px;
  color: black;
  margin-bottom: 20px;
  border: 1px solid #141e30;
  outline: none;
  background: rgb(226, 226, 226);
}

.navigation button {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border-radius: 0.6em;
  cursor: pointer;
  align-self: center;
  font-size: 14px;
  padding: 0.4em 2em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}

.navigation .add button {
  border: 2px solid #00d1b2;
  color: #00d1b2;
}

.navigation-item .delete button {
  border: 2px solid #e74c3c;
  color: #e74c3c;
  margin-bottom: 20px;
}

.navigation .add :hover {
  box-shadow: 0 0 40px 40px #00d1b2 inset;
  color: #fff;
}

.navigation-item .delete :hover {
  box-shadow: 0 0 40px 40px #e74c3c inset;
  color: #fff;
}

.msg {
  padding: 0 40px;
  color: #00d1b2;
}
</style>
