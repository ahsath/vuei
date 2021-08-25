import { createApp } from 'vue'
import App from './App.vue'

import './css/index.css'

import ripple from './directives/ripple'

const app = createApp(App)

app.directive('ripple', ripple)

app.mount('#app')
