<template>
  <nav class="main-nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <!--<router-link to="/about">About</router-link> with data binding url can be dynamic. so if about becomes about-us i only have to modify it in the routing in index.js-->
        <router-link :to="{name: 'About' }">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
</style>