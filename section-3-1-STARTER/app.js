Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      copied: false,
    };
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.copied = false;
    },
    copy() {
      navigator.clipboard.writeText(`transform: ${this.box.transform}`);
      this.copied = true;
    },
  },
  computed: {
    box() {
      return {
        transform: `
            perspective(${this.perspective}px)
            rotateX(${this.rotateX}deg)
            rotateY(${this.rotateY}deg)
            rotateZ(${this.rotateZ}deg)
            `,
      };
    },
  },
}).mount("#app");
