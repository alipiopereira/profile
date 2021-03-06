import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Vuetify);

new Vue({
  store,
  vuetify: new Vuetify(),
  render: h => h(App)
}).$mount("#app");
