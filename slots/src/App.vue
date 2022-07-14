<template>
  <FormItem>
    <template v-slot:help>
      <p>This is some help text</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </template>
  </FormItem>
</template>

<script>
import FormItem from "@/components/FormItem.vue";
export default {
  name: "App",
  components: {
    FormItem,
  },
  data() {
    return {
      user: {
        name: "corbyn",
      },
    };
  },
};
</script>

<style>
@import "@/assets/base.css";
body {
  display: grid;
  place-items: center;
}

#app {
  padding: 1em;
}

.btn {
  border: none;
  border-radius: 0px;
  font-size: 1.1rem;
  padding: 0.5em 0.75em;
  background-color: hsl(154, 100%, 50%);
  letter-spacing: 1px;
  text-transform: uppercase;
  transition-property: background, border-radius;
  transition-duration: 300ms;
  transition-timing-function: ease-in;
}

.btn:hover {
  cursor: pointer;
  background-color: hsl(154, 100%, 40%);
  border-radius: 10px;
  transition-property: background, border-radius;
  transition-duration: 400ms;
  transition-timing-function: ease-out;
}

input {
  padding: 0.25em 0.5em;
  margin: 0.25em;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
}
</style>
