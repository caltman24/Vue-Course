<template>
  <div class="result" v-for="result in results" :key="result.title">
    <div v-show="totalCorrect >= result.min && totalCorrect <= result.max">
      <div class="title">{{ result.title }}</div>
      <div class="desc">{{ result.desc }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  props: {
    totalCorrect: Number,
    results: Array,
  },
};
</script>

<style></style>
