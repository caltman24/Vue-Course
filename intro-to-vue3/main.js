const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Corbyn!",
      count: 0
    };
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log(`The inital count is ${this.count}`)
  }
}).mount("#app");
