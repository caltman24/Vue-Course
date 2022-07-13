<template>
  <form>
    <div class="help">
      <slot name="help">Put help text here</slot>
    </div>
    <div class="fields">
      <slot name="fields">Put input fields here</slot>
    </div>
    <div class="buttons">
      <slot name="buttons">
        <button @click.prevent type="submit" class="btn">submit</button>
      </slot>
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
