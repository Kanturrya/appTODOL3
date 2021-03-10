<template>
<<<<<<< HEAD
  <sidebar @change-selected-list="selectList"></sidebar>
=======
>>>>>>> f80f5635cc6bc3922a6e6998b10913a9b9fc8f68
  <todolist></todolist>
</template>

<script>
<<<<<<< HEAD
import Sidebar from "./components/sidebar.vue";
import Todolist from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Todolist,
  },

  methods: {
    selectList: function (id) {
      console.log("select liste : " + id)
    },
  },
};
=======
import Todolist from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
    Todolist
  }
}
>>>>>>> f80f5635cc6bc3922a6e6998b10913a9b9fc8f68
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
