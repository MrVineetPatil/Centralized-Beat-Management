// The `Vue` build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import firebase from 'firebase'
import VueRouter from 'vue-router'
import Vuefire from 'vuefire'
import Vuetify from 'vuetify'
import { ref, auth } from './config/firebase'
import './stylus/main.styl'
import App from './App'
import { routes } from './router/index'
import moment from 'moment'
import { store } from './components/state/index'


Vue.use(Vuetify)

 
Vue.component('Vue', Vuetify);


Vue.config.productionTip = false

const router = new VueRouter({
	mode: 'history',
	routes,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created() {
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        console.log('App login')
        this.$store.dispatch('autoSign', user)
      }else{
        console.log('App logout')
      }
    })
  }
})

import VueGoogleMaps from 'vue-googlemaps'
import 'vue-googlemaps/dist/vue-googlemaps.css'
Vue.use(VueGoogleMaps, {
  load: {
    // Google API key
    apiKey: 'AIzaSyDoIf8SNg8p8nxSCV8KQu3DjnjD2PpfBg8',
    // Enable more Google Maps libraries here
    libraries: ['places'],
    // Use new renderer
    useBetaRenderer: false,
  },
})
