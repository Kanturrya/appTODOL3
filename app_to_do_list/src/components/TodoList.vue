<template>
  <div class="todolist">

    <h4>{{getTodolistFromId(idList).name}}</h4>

    <div class="newTodo">
      <input type="text" v-model="newTodo" placeholder="Ajouter une tâche">
      <button @click="addTodo([idList, newTodo])">Ajouter</button>
    </div>

    <div class="todos">
      <ul>
        <li v-for="todo in filteredTodos(idList, filter)" v-bind:key="todo">
          <input type="checkbox" id="todo.name" v-model="todo.isCompleted">
          <label for="todo.name">{{todo.name}}</label>
          <button @click="deleteTodo([idList, todo.id])">Supprimer</button>
          </li>
        </ul>
      </div>

    <div class="filterButtons">
      <label type="text">{{countUndoneTodos(idList)}} tâche(s) à faire </label>
      <button @click="change('all')"> Toutes </button>
      <button @click="change('unchecked')"> À faire </button>
      <button @click="change('checked')"> Faites </button>
    </div>

  </div>
</template>

<script>

import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default defineComponent({

  name: 'TodoList',

  data() {
    return {
      newTodo: '',
      filter: 'all',
      idList: 1 // à remplacer plus tard avec un props
    }
  },

  methods: {

    ...mapMutations("todolist", ["deleteTodo", "addTodo"]),

    change(status) {
      this.filter = status;
    },

  },

  computed: {

    ...mapGetters("todolist", ["filteredTodos", "countUndoneTodos", "getTodolistFromId"]),

  },

});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
