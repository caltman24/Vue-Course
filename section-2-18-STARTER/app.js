let vm = Vue.createApp({
  data() {
    return {
      isPurple: false,
      selectedColor: "",
      size: 150,
    };
  },
  // Computed props udate whenever the data it uses is updated
  computed: {
    circle_classes() {
      return { purple: this.isPurple };
    },
  },
}).mount("#app");
