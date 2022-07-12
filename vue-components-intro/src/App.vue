<template>
  <h2>Butt Muncher</h2>
  <GreetingMesage :age="age" />
  <TheUser
    :age="age"
    @increase="increaseAge"
    @decrease="decreaseAge"
    :ageChangeFn="increaseAgeCB"
  />
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
  methods: {
    increaseAge() {
      this.age < 30 ? this.age++ : this.age;
    },
    increaseAgeCB(num) {
      this.age < 30 ? (this.age += num) : this.age;
    },
    decreaseAge() {
      this.age <= 0 ? this.age : this.age--;
    },
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
