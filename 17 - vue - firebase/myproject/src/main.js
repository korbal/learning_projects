import Vue from "vue";
import App from "./App.vue";

Vue.filter("snippet", val => {
  //if pulled in post is not string
  if (!val || typeof val != "string") return "";

  val = val.slice(0, 50);
  return val;
});

new Vue({
  el: "#app",
  render: h => h(App)
});
