let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: "John",
          message: "Hello world!",
        },
        {
          name: "Rick",
          message: "I like pie.",
        },
        {
          name: "Amy",
          message: "Skydiving is fun!",
        },
      ],
    };
  },
  methods: {
    move() {
      // Remove first item in the array and store it
      const first = this.people.shift();
      this.people = [...this.people, first];
    },
  },
}).mount("#app");
