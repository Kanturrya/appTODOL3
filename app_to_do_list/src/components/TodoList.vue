<template>

  <!--Message pour l'utilisateur et pas que-->
  <div>
    <h4>{{getMessage}}</h4>
  </div>

  <!-- Affichage des todos -->
  <div class="displayAddAndTodos" v-if="idList !== '0'">

    <div class="displayTodos">
      <h4> Liste utilisée: {{idList}} </h4>

      <!-- Creation d'un todo -->
      <div class="createTodo"> 
        <input type="text" v-bind:id="todo.id" placeholder="Ajouter une todo" v-model="todo.name">      
        <button @click="eventAddTodo(idList)"> Ajouter Todo </button>
      </div>

      <div class="filterButtons">
        <button @click="change('all')"> Toutes </button>
        <button @click="change('unchecked')"> À faire </button>
        <button @click="change('checked')"> Faites </button>
      </div>

    <div>
      <ul v-for="todo in filterTodos(filter)" v-bind:key="todo.id"> 
        <li> {{todo.name}} 
          <input @click="eventChangeState(todo)" type="checkbox" v-bind:id="todo.id" v-model="todo.completed">
          <button @click="eventDeleteTodo(todo.id)"> Supprimer </button>
          <button @click="eventModifNomTodo(todo)"> Modifier </button>
        </li>
      </ul>
    </div>

    </div>

    <div class="modifTodo" v-if="modif === true">
      <input type="text" :key="todoChange.id" placeholder="Modifier un nom de todo" v-model="todoChange.name">
      <button @click="eventModifTodo(todoChange)"> Ok </button>
      <button @click="eventStopModif"> Annuler </button>
    </div>

  </div>
</template>

<script>

import { defineComponent } from 'vue';
import { mapGetters, mapActions, mapState } from 'vuex';

export default defineComponent({

  name: 'TodoList',

  data() {
    return {
      currentList: "",
      modif: false,
      newList: '',
      filter: 'all',

      todo: {
        id: null,
        name: "",
        completed: false,
        todolist_id: null
      },

      todoChange: {
        id: null,
        name: "",
        completed: false,
        todolist_id: null
      }

    }
  },

  props: {
    idList: {
        type: String,
        required: true,
    }
  },

  mounted() {
    this.fetchTodolists();
  },

  methods: {

    ...mapActions("todolist", ["fetchTodolists", "fetchTodos", "createTodolist", "deleteTodolist", "createTodo", "deleteTodo", "modifTodo", "completeTodo", "refreshTodos"]),

    change(status) {
      this.filter = status;
    },

    eventDeleteTodolist(id) {
      this.deleteTodolist(id);
    },

    eventAddTodo(id) {
      this.todo.todolist_id = id;
      this.createTodo(this.todo);
      this.todo.name = "";
      this.todolist_id = null;
    },

    eventDeleteTodo(id) {
      this.deleteTodo(id);
    },

    eventChangeState(todo) {
      todo.completed = !todo.completed;
      this.completeTodo(todo);
    },

    eventModifTodo(todo) {
      this.modifTodo(todo);
      this.modif = false;
    },

    eventModifNomTodo(todo) {
      this.todoChange = todo;
      this.modif = true;
    },

    eventStopModif() {
      this.modif = false;
    },

    tests(todo) {
      todo.completed = !todo.completed;
      this.completeTodo(todo);
    }    



  },

  computed: {

    ...mapState("todolist", ["todolists", "todos"]),
    ...mapGetters("todolist", ["getAll", "getMessage", "getTodos", "filterTodos"]),
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
.displayAddAndTodos {
  width: 70%;
}
</style>
