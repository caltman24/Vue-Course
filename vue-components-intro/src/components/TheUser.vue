<template>
  <h2>The user is {{ age }} years old</h2>
  <button @click="$emit('increase')">+1</button>
  <button @click="$emit('decrease')">-1</button>
</template>

<script>
export default {
  name: "TheUser",
  props: {
    age: Number,
  },
};
</script>

<style></style>
