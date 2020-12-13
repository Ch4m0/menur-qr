<template>
  <div id="app">
    <ListProduct />
  </div>
</template>

<script>
import ListProduct from "./components/ListProduct.vue";

export default {
  name: "App",
  components: {
    ListProduct
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: orange;
  color: white;
  height: 100vh;
}
p {
  margin-bottom: 0;
  margin-top: 0;
}
</style>
