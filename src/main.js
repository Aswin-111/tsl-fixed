// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { useEventBus } from './eventBus';

const app = createApp(App);
const { $on, $emit } = useEventBus();
app.config.globalProperties.$eventBus = { $on, $emit };

app.use(router);
app.mount('#app');
