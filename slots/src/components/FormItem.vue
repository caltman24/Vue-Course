<template>
  <form>
    <div class="help">
      <slot name="help">Help Text</slot>
    </div>
    <div class="fields">
      <slot name="fields"></slot>
    </div>
    <div class="buttons">
      <slot name="buttons">No Button</slot>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormItem",
};
</script>

<style scoped>
.fields {
  margin-block: 1em;
}
</style>
