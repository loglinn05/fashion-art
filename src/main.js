import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import router from './router.js'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'primevue/resources/primevue.min.css'
import 'primevue/resources/themes/saga-orange/theme.css'
import './assets/css/main.css'
import { createPinia } from 'pinia'
import App from './App.vue'
import components from './components/global'

const pinia = createPinia();
let app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
})

app.use(router).use(pinia).use(PrimeVue).mount('#app')