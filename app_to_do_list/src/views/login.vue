<template>
  <div class="welcome">
    <h1>Bienvenue dans l'application de TodoList</h1>
  </div>
  <div class="box">
    <h1>Connexion</h1>
    <div class="login-box">
      <label><b>Mail</b></label>
      <input type="text" placeholder="Mail" v-model="this.user.email" />
    </div>
    <div class="login-box">
      <label><b>Mot de passe</b></label>
      <input
        type="password"
        placeholder="Mot de passe"
        v-model="this.user.password"
      />
    </div>
    <div class="loginButtons">
      <div class="connexionButton">
        <button @click="eventLogin">Connexion</button>
      </div>
      <div class="signupButton">
        <button @click="eventRegister">S'inscrire</button>
      </div>
    </div>

    <p v-if="msg">{{ msg }}</p>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      user: {
        name: "Itsme",
        email: "",
        password: "",
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
    },
  },
};
</script>

<style>
html {
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: #141e30;
}

.welcome {
  text-align: center;
  color: #fff;
}

.box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 50vw;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.box h1 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.box .login-box {
  position: relative;
}

.box .login-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #888;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.box .login-box label {
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
}

.box .loginButtons {
  display: flex;
  justify-content: space-between;
}

.box button {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border-radius: 0.6em;
  cursor: pointer;
  align-self: center;
  font-size: 14px;
  padding: 0.4em 2em;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
}

.connexionButton button {
  border: 2px solid #2ecc71;
  color: #2ecc71;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}

.signupButton button {
  border: 2px solid #f1c40f;
  color: #f1c40f;
  transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;
}

.connexionButton :hover {
  box-shadow: 0 0 40px 40px #2ecc71 inset;
  color: #fff;
}

.signupButton :hover {
  box-shadow: 0 0 40px 40px #f1c40f inset;
  color: #fff;
}
</style>
