import { createApp } from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircle, faTag, faSpinner, faTimes, faUserSecret, faCoffee, faGrinHearts } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

library.add(faUserSecret, faSpinner, faCircle, faTimes, faTag, faCoffee, faGrinHearts)


createApp(App)
    .component('fa-icon', FontAwesomeIcon)
    .component('fa-layer', FontAwesomeLayers)
    .component('fa-layer-text', FontAwesomeLayersText)
    .mount('#app')
