<template>
  <input
    type="radio"
    v-bind="$attrs"
    :checked="modelValue === value"
    :value="value"
    @change="$emit('update:modelValue', value)"
  />
  <label>{{ label }}</label>
</template>

<script>
export default {
  name: "BaseRadio",
  props: {
    label: {
      type: String,
      default: "",
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    value: {
      type: [String, Number],
      required: true,
    },
  },
};
</script>
