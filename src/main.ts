import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { RaceViewModel, raceViewModelKey } from './views/race/view-model/race.view-model'

const app = createApp(App)

app.use(RaceViewModel, raceViewModelKey)

app.use(router)

app.mount('#app')
