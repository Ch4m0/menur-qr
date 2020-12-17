import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Vuetify from "vuetify";
// index.js or main.js
import "vuetify/dist/vuetify.min.css";
const vuetifyOptions = {};
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App)
}).$mount("#app");
