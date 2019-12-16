new Vue({
  el: "#app",
  data: {
    title: "becoming a vue ninja",
    name: "Ryu"
  },
  methods: {
    greet(time) {
      return `hello there ${this.name}, this is ${time}`;
    }
  }
});
