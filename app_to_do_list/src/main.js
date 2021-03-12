import Axios from 'axios';
import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store/index';
import { router } from './router/index';
import * as state from './store/account/state'

const app = createApp(App);

Axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;

app.use(store).use(router).mount("#app");