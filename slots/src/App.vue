<template>
  <form>
    <div class="help">
      <p>This is some help text</p>
    </div>
    <div class="fields">
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </div>
    <div class="buttons">
      <button type="submit" class="btn">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "App",
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
  border-radius: 5px;
  font-size: 1.1rem;
  padding: 0.5em 0.75em;
  margin-top: 1em;
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
  border-radius: 50%;
  transition-property: background, border-radius;
  transition-duration: 400ms;
  transition-timing-function: ease-out;
}
</style>
