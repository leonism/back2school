import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Will be created in next step
import './input.css'; // Import Tailwind's entry CSS

const app = createApp(App);
app.use(router); // Will be uncommented in next step
app.mount('#app');
