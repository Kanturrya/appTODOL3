<template>
  <aside class="aside">
    <nav class="navigation" role="navigation">
      <ul class="navigation-list">
        <li class="navigation-item" v-for="todo in getAll" v-bind:key="todo.id">
          <p class="navigation-link" v-on:click="selectList(todo.id)">
            {{ todo.name }} ( {{countUndoneTodos(todo.id)}} )
          </p>
        </li>
      </ul>
    </nav>
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
      this.$emit('change-selected-list', id)
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