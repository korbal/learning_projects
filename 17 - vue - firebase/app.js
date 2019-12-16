new Vue({
  el: "#app",
  data: {
    title: "becoming a vue ninja",
    name: "Balint",
    url: "https://youtube.com",
    classes: ["one", "two"],
    wage: 20,
    coords: {
      x: 0,
      y: 0
    }
  },
  methods: {
    greet(time) {
      return `Good ${time}, ${this.name} `;
    },
    changeWage(amount) {
      this.wage += amount;
    },
    logEvent(e) {
      console.log(e);
    },
    logCoords(e) {
      this.coords.x = e.offsetX;
      this.coords.y = e.offsetY;
    }
  }
});
