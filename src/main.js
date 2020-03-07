// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import firebase from 'firebase'

Vue.use(Buefy)
Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: 'AIzaSyA3NM0JvMYOsn21B7Z18v1vtQnmiRdwMnY',
  authDomain: 'statement-80301.firebaseapp.com',
  databaseURL: 'https://statement-80301.firebaseio.com',
  projectId: 'statement-80301',
  storageBucket: 'statement-80301.appspot.com',
  messagingSenderId: '960585884243',
  appId: '1:960585884243:web:0c2a6b4ffa3a9358e0dca6',
  measurementId: 'G-GMYKX9B66G'
}
firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },

  template: '<App/>'
})
