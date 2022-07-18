<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/About">About</RouterLink>
  </nav>
  <RouterView />
</template>

<script>
export default {
  name: "App",
};
</script>
