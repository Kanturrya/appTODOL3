<template>
  <h1>TodoList</h1>
  <div class="todoPage">
    <sidebar @change-selected-list="selectList"></sidebar>
    <todolist :idList="idList"></todolist>
  </div>
  
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

h1 {
  color: #fff;
  text-align: center;
}

.todoPage {
  display: flex;
}
</style>
