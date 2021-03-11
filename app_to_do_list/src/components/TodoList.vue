<template>

  <div class="newList" v-if="idList === '0'">
      <input type="text" v-model="newList" placeholder="Ajouter une liste">
      <router-link :to="'/home/' + getSize">
        <button @click="eventAddList">Ajouter</button>
      </router-link>
  </div>


  <div class="todolist" v-else-if="listExists">

    <h4>{{getTodolistFromId(parseInt(idList)).name}}</h4>

    <div class="newTodo">
      <input type="text" v-model="newTodo" placeholder="Ajouter une tâche">
      <button @click="eventAddTodo">Ajouter</button>
    </div>

    <div class="todos">
      <ul>
        <li v-for="todo in filteredTodos(parseInt(idList), filter)" v-bind:key="todo">
          <input type="checkbox" id="todo.name" v-model="todo.isCompleted">
          <label for="todo.name">{{todo.name}}</label>
          <button @click="deleteTodo([parseInt(idList), todo.id])">Supprimer</button>
          </li>
        </ul>
      </div>

    <div class="filterButtons">
      <label type="text">{{countUndoneTodos(parseInt(idList))}} tâche(s) à faire </label>
      <button @click="change('all')"> Toutes </button>
      <button @click="change('unchecked')"> À faire </button>
      <button @click="change('checked')"> Faites </button>
    </div>

  </div>


  <div class="Erreur" v-else>

    <p>La liste d'identifiant {{idList}} n'existe pas</p>

  </div>

</template>

<script>

import { defineComponent } from 'vue';
import { mapGetters, mapActions } from 'vuex';

export default defineComponent({

  name: 'TodoList',

  data() {
    return {
      newTodo: '',
      newList: '',
      filter: 'all',
    }
  },

  props: {
    idList: {
        type: String,
        required: true,
    }
  },

  methods: {

    ...mapActions("todolist", ["deleteTodo", "addTodo", "addList"]),

    change(status) {
      this.filter = status;
    },

    eventAddTodo() {
      this.addTodo([parseInt(this.idList), this.newTodo]);
      this.newTodo = "";
    },

    eventAddList() {
      this.addList(this.newList);
      this.newList = "";
    }

  },

  computed: {

    ...mapGetters("todolist", ["getSize", "filteredTodos", "countUndoneTodos", "getTodolistFromId", "getIdLastList"]),

    listExists: function() {
      return parseInt(this.idList) <= this.getIdLastList && parseInt(this.idList) > 0;
    }

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
