<template>
  <div>
    <h1>S'inscrire</h1>
    <input type="text" placeholder="Pseudo" v-model="username" />
    <input type="text" placeholder="Mot de passe" v-model="password" />
    <input
      type="text"
      placeholder="Confirmation mot de passe"
      v-model="password_repeat"
    />
    <router-link :to="'/home'"> <button>S'inscrire</button> </router-link>
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>
<script>
//import AuthService from ''; il faut ajouter le fichier d'authentification
export default {
  data() {
    return {
      username: '',
      password: '',
      password_repeat: '',
      msg: ''
    };
  },
  methods: {
    async signUp() {
      try {
        /*const credentials = {
          username: this.username,
          password: this.password,
          password_repeat: this.password_repeat
        };
        const response = await AuthService.signUp(credentials);
        this.msg = response.msg;*/
      } catch (error) {
        //this.msg = error.response.data.msg;
      }
    }
  }
};
</script>