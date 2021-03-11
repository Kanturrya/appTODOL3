<template>
  <aside class="aside">
    <nav class="navigation" role="navigation">
      <ul class="navigation-list">
        <li class="navigation-item" v-for="todo in getAll" v-bind:key="todo.id">
          <router-link :to="'/home/' + todo.id" class="navigation-link">{{ todo.name }} ( {{countUndoneTodos(todo.id)}} )</router-link>
        </li>
      </ul>
    </nav>
    <router-link :to="'/home/0'">
      <button>Ajouter une liste</button>
    </router-link>
  </aside>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Sidebar",

  data() {
    return {};
  },

  methods: {
    selectList: function (id) {
     console.log("select liste : " + id)
    },
  },

  computed: {
    ...mapGetters("todolist", [
      "getAll",
      "filteredTodos",
      "countUndoneTodos",
      "getTodolistFromId",
    ]),
  },
};
</script>

<style scoped>

.navigation-list {
  display: inline-block;
  list-style: none;
}

.navigation-item {
  cursor: pointer;
}

.navigation-list :hover {
  background: darkgrey;
}
</style>