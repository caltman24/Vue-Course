<template>
  <BaseRadio
    v-for="option in options"
    :key="option.value"
    :label="option.label"
    :value="option.value"
    :name="name"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  />
</template>

<script>
import BaseRadio from "./BaseRadio.vue";
export default {
  name: "BaseRadioGroup",
  components: {
    BaseRadio,
  },
  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    /*
        options: [
          {
            value: "1",
            label: "Yes",
          },
          {
            value: "0",
            label: "No",
          },
        ],
    */
  },
};
</script>
