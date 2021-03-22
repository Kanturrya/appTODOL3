<template>
  <!-- Affichage des todos -->
  <div class="displayAddAndTodos" v-if="idList !== '0'">
    <div class="displayTodos">
      <h4>ID de la liste : {{ idList }}</h4>

      <!-- Creation d'un todo -->
      <div class="createTodo">
        <input
          type="text"
          v-bind:id="todo.id"
          placeholder="Ajouter une todo"
          v-model="todo.name"
        />
        <div class="createButton">
          <button @click="eventAddTodo(idList)">Ajouter Todo</button>
        </div>
      </div>

      <div class="filterButtons">
        <button @click="change('all')">Toutes</button>
        <button @click="change('unchecked')">À faire</button>
        <button @click="change('checked')">Faites</button>
      </div>

      <div>
        <div class="modifTodo" v-if="modif === true">
          <input
            type="text"
            :key="todoChange.id"
            placeholder="Modifier un nom de todo"
            v-model="todoChange.name"
            @keyup.enter="eventModifTodo(todoChange)"
            @keyup.esc="eventStopModif"
          />
          <button @click="eventModifTodo(todoChange)">Ok</button>
          <button @click="eventStopModif">Annuler</button>
        </div>
        <ul
          class="listTodo"
          v-for="todo in filterTodos(filter)"
          v-bind:key="todo.id"
        >
          <li>
            <div class="todoLeft">
              <input
                @click="eventChangeState(todo)"
                type="checkbox"
                v-bind:id="todo.id"
                v-model="todo.completed"
                class="checkTodo"
              />
              <div v-if="! todo.modif" @dblclick="eventModifNomTodo(todo)">
                {{ todo.name }}
              </div>
            </div>
            <div class="todoRight">
              <div class="todoDelete">
                <button @click="eventDeleteTodo(todo.id)">Supprimer</button>
              </div>
              <div class="todoEdit">
                <button @click="eventModifNomTodo(todo)">Modifier</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters, mapActions, mapState } from "vuex";

export default defineComponent({
  name: "TodoList",

  data() {
    return {
      currentList: "",
      modif: false,
      newList: "",
      filter: "all",

      todo: {
        id: null,
        name: "",
        completed: false,
        todolist_id: null,
      },

      todoChange: {
        id: null,
        name: "",
        completed: false,
        todolist_id: null,
      },
    };
  },

  props: {
    idList: {
      type: String,
      required: true,
    },
  },

  mounted() {
    this.fetchTodolists();
  },

  methods: {
    ...mapActions("todolist", [
      "fetchTodolists",
      "fetchTodos",
      "createTodolist",
      "deleteTodolist",
      "createTodo",
      "deleteTodo",
      "modifTodo",
      "completeTodo",
      "refreshTodos",
    ]),

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
      this.fetchTodos(todo.todolist_id);
    },

    eventModifNomTodo(todo) {
      this.todoChange.id = todo.id;
      this.todoChange.todolist_id = todo.todolist_id;
      this.todoChange.name = todo.name;
      this.todoChange.completed = todo.completed;
      this.modif = true;
    },

    eventStopModif() {
      this.modif = false;
    },

    tests(todo) {
      todo.completed = !todo.completed;
      this.completeTodo(todo);
    },
  },

  computed: {
    ...mapState("todolist", ["todolists", "todos"]),
    ...mapGetters("todolist", [
      "getAll",
      "getMessage",
      "getTodos",
      "filterTodos",
    ]),
  },
});
</script>

<style>
.createTodo {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}

.createTodo input {
  width: 50%;
  padding: 10px 10px;
  font-size: 16px;
  color: black;
  border: 1px solid #141e30;
  outline: none;
  background: rgb(226, 226, 226);
}

.listTodo li {
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.listTodo {
  padding: 0;
}

.todoLeft {
  display: flex;
}

.checkTodo {
  margin-right: 20px;
}

.displayTodos {
  width: 50vw;
  padding: 20px 40px;
  margin-left: 40px;
  background: #fff;
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
}

.displayTodos h4 {
  padding: 0;
  color: black;
  text-align: center;
}

.displayTodos button {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border-radius: 0.6em;
  cursor: pointer;
  align-self: center;
  font-size: 12px;
  padding: 0.4em 2em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}

.todoRight {
  display: flex;
}

.todoDelete button {
  border: 2px solid #e74c3c;
  color: #e74c3c;
}

.todoEdit button {
  border: 2px solid #f1c40f;
  color: #f1c40f;
  margin-left: 10px;
}

.createButton button {
  border: 2px solid #00d1b2;
  color: #00d1b2;
  margin-left: 20px;
}

.filterButtons {
  text-align: center;
}

.filterButtons button {
  border: 2px solid #00d1b2;
  color: #00d1b2;
  margin: 20px 20px;
}

.createButton :hover {
  box-shadow: 0 0 40px 40px #00d1b2 inset;
  color: #fff;
}

.todoDelete :hover {
  box-shadow: 0 0 40px 40px #e74c3c inset;
  color: #fff;
}

.todoEdit :hover {
  box-shadow: 0 0 40px 40px #f1c40f inset;
  color: #fff;
}

.filterButtons :hover {
  box-shadow: 0 0 40px 40px #00d1b2 inset;
  color: #fff;
}
</style>
