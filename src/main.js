import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import router from "./router.js"
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/saga-orange/theme.css'
import './assets/css/main.css'
import App from './App.vue'
import components from './components/global'

let app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app.use(router).use(PrimeVue).mount('#app')