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
    },
    showName: true,
    showAge: true,
    items: ["mushroom", "star", "fasz", "pina", "lofasz"],
    ninjas: [
      { name: "Balint", age: 25, belt: "black" },
      { name: "Jozsi", age: 28, belt: "white" },
      { name: "Sanyi", age: 12, belt: "pink" }
    ]
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
    },
    updateName(e) {
      this.name = e.target.value;
    },
    logMessage() {
      console.log("this was logged...");
    },
    toggleMario() {
      this.showName = !this.showName;
    },
    toggleAge() {
      this.showAge = !this.showAge;
    }
  }
});
