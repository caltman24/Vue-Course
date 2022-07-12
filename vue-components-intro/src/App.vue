<template>
  <h2>Butt Muncher</h2>
  <GreetingMesage :age="age" />
  <TheUser :age="age" @increase="age++" @decrease="age--" />
</template>

<script>
import GreetingMesage from "@/components/GreetingMessage.vue";
import TheUser from "@/components/TheUser.vue";

export default {
  name: "App",
  components: {
    GreetingMesage,
    TheUser,
  },
  data() {
    return {
      age: 20,
    };
  },
};
</script>

<style>
@import "./assets/base.css";
</style>
