<template>
  <h2>The user is {{ age }} years old</h2>
  <!-- This button emits an event(preferred) -->
  <button @click="$emit('increase')">+1(Event)</button>
  <!-- This button runs a prop thats a callback function -->
  <button @click="ageChangeFn(2)">+1(CB)</button>
  <button @click="$emit('decrease')">-1</button>
  <p>Doubled Age: {{ doubleAge }}</p>
</template>

<script>
export default {
  name: "TheUser",
  emits: ["increase", "decrease"],
  computed: {
    doubleAge() {
      return this.age * 2;
    },
  },
  props: {
    age: {
      type: Number,
      validator(value) {
        return value <= 30;
      },
    },
    ageChangeFn: Function,
  },
};
</script>

<style></style>
