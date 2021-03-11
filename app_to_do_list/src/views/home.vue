<template>
  <sidebar @change-selected-list="selectList"></sidebar>
  <todolist :idList="idList"></todolist>
</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Todolist from "../components/TodoList.vue";

export default {
  name: "Home",
  components: {
    Sidebar,
    Todolist,
  },

  props: {
    idList: {
        type: String,
        default: '0',
    }
  },

  methods: {
    selectList: function (id) {
      console.log("select liste : " + id)
    },
  },
};
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
