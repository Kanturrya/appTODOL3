<template>
  <div>
    <h1>Connexion</h1>
    <input type="text" placeholder="Mail" v-model="this.user.email" />
    <input type="text" placeholder="Mot de passe" v-model="this.user.password" />
    <button @click="eventLogin">Connexion</button>
    <button @click="eventRegister">S'inscrire</button>
    <p v-if="msg">{{ msg }}</p>
  </div>
</template>
<script>
//import { auth } from '';   Il faudra ajouter un fichier d'authentification
import { mapActions } from "vuex";
export default {
  data() {
    return {
        user: {
          name: "Itsme",
          email: "mail.me@gmail.com",
          password: "MyPass12" 
        },
        msg: "",
    };
  },

  methods: {
      ...mapActions("account", ["login", "register"]),

      eventLogin() {
          this.login(this.user);
      },

      eventRegister() {
          this.register(this.user);
      }
  },

};
</script> 