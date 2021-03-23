<template>
  <div class="titleAndLogout">
    <h1>TodoList</h1>
    <div class="logoutButton">
      <input type="button" value="Déconnexion" @click="eventLogout" />
    </div>
  </div>

  <div class="todoPage">
    <sidebar @change-selected-list="selectList"></sidebar>
    <todolist :idList="idList"></todolist>
  </div>

</template>

<script>
import Sidebar from "../components/sidebar.vue";
import Todolist from "../components/TodoList.vue";
import { mapActions } from "vuex";

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
      console.log("select liste : " + id);
    },

    ...mapActions("account", ["logout"]),

    eventLogout() {
      this.logout();
      this.$router.push('/login');
    },
  },
};
</script>

<style>

.titleAndLogout h1 {
  color: #fff;
  padding: 0 25% 0 50%;
}

.titleAndLogout {
  display: flex;
  align-items: center;
}

.titleAndLogout input {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: none;
  cursor: pointer;
  align-self: center;
  font-size: 14px;
  padding: 0.4em 2em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  color: #e74c3c;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}

.titleAndLogout .logoutButton :hover {
  color: #fff;
}

.todoPage {
  display: flex;
}
</style>
