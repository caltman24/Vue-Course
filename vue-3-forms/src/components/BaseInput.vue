<template>
  <label>{{ label }}</label>
  <input
    v-bind="{
      ...$attrs,
      onInput: ($event) => {
        $emit('update:modelValue', $event.target.value);
      },
    }"
    :placeholder="label"
    class="field"
    :value="modelValue"
  />
</template>

<!-- 
    v-bind="{
      ...$attrs,
      onInput: ($event) => {
        $emit('update:modelValue', $event.target.value);
      },
    }"

    IS THE SAME AS:

    v-bind="$attrs"
    @input="$emit('update:modelValue', $event.target.value)"
 -->

<script>
export default {
  name: "BaseInput",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      default: "",
    },
  },
};
</script>
