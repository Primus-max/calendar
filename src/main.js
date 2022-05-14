import 'primevue/resources/themes/lara-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import {createPinia} from "pinia";

const app = createApp(App);


app.use(PrimeVue);
app.use(createPinia())
app.mount('#app');
