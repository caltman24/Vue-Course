<template>
  <p v-if="age < 25">You must be at least 25 years old to view this message</p>
  <h3 v-else>{{ message }}</h3>
</template>

<script>
export default {
  name: "GreetingMessage",
  props: {
    age: Number,
  },
  data() {
    return {
      message: "Greetings World!",
    };
  },
};
</script>

<style lang="scss" scoped>
@mixin redText {
  color: red;
}

h3 {
  @include redText;
}
</style>
