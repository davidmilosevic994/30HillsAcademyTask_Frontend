<template>
  <div>
    <the-header></the-header>
    <shopping-cart v-if="activeCart"></shopping-cart>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue";
import ShoppingCart from "./components/cart/ShoppingCart.vue";

export default {
  components: {
    TheHeader,
    ShoppingCart,
  },
  computed: {
    activeCart() {
      return this.$store.getters["cart/activeCart"];
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Almarai", sans-serif;
  line-height: 1;
  font-weight: 400;
  color: #000;
  background-color: #f2f2f2;
}

main {
  max-width: 120rem;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 5rem;
  background-color: #f2f2f2;
  padding: 5rem 3rem;
}
</style>
