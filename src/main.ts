import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/lara-light-blue/theme.css'
import './app/main.css'

import { initializeApp } from 'firebase/app'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import ProgressSpinner from 'primevue/progressspinner'
import Card from 'primevue/card'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InlineMessage from 'primevue/inlinemessage'
import InputNumber from 'primevue/inputnumber'
import Textarea from 'primevue/textarea'
import Calendar from 'primevue/calendar'
import Radio from 'primevue/radiobutton'

import { createApp } from 'vue'

import App from './app/App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyDoq4wK7bQ-i_R9xi6yj0Ft2dmDgu5Ntow',
  authDomain: 'interviews-af9b7.firebaseapp.com',
  projectId: 'interviews-af9b7',
  storageBucket: 'interviews-af9b7.appspot.com',
  messagingSenderId: '636359730831',
  appId: '1:636359730831:web:858e304cf5bb84dbd0f2fa'
}
initializeApp(firebaseConfig)

const app = createApp(App)

app.use(ToastService)
app.use(createPinia())
app.use(router)
app.use(PrimeVue)
app.component('app-menubar', Menubar)
app.component('app-button', Button)
app.component('app-input-text', InputText)
app.component('app-toast', Toast)
app.component('app-progress', ProgressSpinner)
app.component('app-card', Card)
app.component('app-data-table', DataTable)
app.component('app-column', Column)
app.component('app-message', InlineMessage)
app.component('app-input-number', InputNumber)
app.component('app-textarea', Textarea)
app.component('app-calendar', Calendar)
app.component('app-radio', Radio)

app.mount('#app')
