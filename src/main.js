import { createApp } from 'vue'
import store from '../src/store/index' 
import App from './App.vue'
// import './styles/my-styles.scss'


const app = createApp(App)
app.use(store)
app.mount('#app')
