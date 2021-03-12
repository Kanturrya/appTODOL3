<template>
  <div>
    <h1>Connexion</h1>
    <input type="text" placeholder="Pseudo" v-model="username" />
    <input type="text" placeholder="Mot de passe" v-model="password" />
    <router-link :to="'/home'"> <button>Connexion</button> </router-link>
    <router-link :to="'/SignUp'"> <button>S'inscrire</button> </router-link>
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>
<script>
//import { auth } from '';   Il faudra ajouter un fichier d'authentification
export default {
  data() {
    return {
      username: "",
      password: "",
      msg: "",
    };
  },
  methods: {
    async login() {
      try {
        /*const credentials = {
          username: this.username,
          password: this.password,
        };
        const response = await auth.login(credentials);
        this.msg = response.msg;
        const token = response.token;
        const user = response.user;
        this.$store.dispatch('login', { token, user });
        this.$router.push('/');*/
      } catch (error) {
        //this.msg = error.response.data.msg;
      }
    },
  },
};
</script>