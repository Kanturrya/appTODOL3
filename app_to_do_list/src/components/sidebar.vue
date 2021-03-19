<template>
  <aside class="aside">
    <nav class="navigation" role="navigation">
      <h1>Vos Listes</h1>
      <!--Créer une liste -->
      <div class="newList">
        <input type="text" v-model="newList" placeholder="Ajouter une liste" />
        <router-link :to="'/home/0'">
          <button @click="eventAddList">Ajouter</button>
        </router-link>
      </div>
      <ul class="navigation-list">
        <li
          class="navigation-item"
          v-for="todo in todolists"
          v-bind:key="todo.id"
        >
          <router-link :to="'/home/' + todo.id" class="navigation-link">
            <p v-on:click="selectList(todo.id)">
              {{ todo.name }} (
              {{ todo.todos.filter((todo) => !todo.completed).length }} tâches à faire )
            </p>
          </router-link>
          <button @click="deleteTodolist(todo.id)"> Supprimer la liste </button>
        </li>
      </ul>
    </nav>
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
    ...mapActions("todolist", ["refreshTodos", "fetchTodos", "createTodolist", "deleteTodolist"]),

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
    ...mapState("todolist", ["todolists"]),
    ...mapGetters("todolist", ["filterTodos"]),
  },
};
</script>

<style scoped>
.aside {
  width: 30%;
  height: 85vh;
  border: solid 1px blueviolet;
}

.navigation-list {
  text-align: left;
  list-style-type: none;
}

.navigation-link {
  cursor: pointer;
}

.navigation-link :hover {
  background: darkgrey;
}

</style>