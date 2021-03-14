<template>
  <div>
    <h1>Connexion</h1>
    <input type="text" placeholder="Mail" v-model="email" />
    <input type="text" placeholder="Mot de passe" v-model="password" />
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
        pseudo: "toto",
        email: "toto@toto.com",
        password: "totototo",
        msg: "",
    };
  },

  methods: {
      ...mapActions("account", ["login", "register"]),

      eventLogin() {
          this.login(this.email, this.password);
      },

      eventRegister() {
          this.register(this.pseudo, this.email, this.password);
      }
  },

};
</script> 