import {createApp} from 'vue';
import App from './App.vue'
import LottieAnimation from "lottie-web-vue";
import Quasar from "quasar";
import quasarUserOptions from './setup/quasar-user-options'

const app = createApp(App);
app.use(LottieAnimation);
app.use(Quasar, quasarUserOptions);

app.mount('#app')