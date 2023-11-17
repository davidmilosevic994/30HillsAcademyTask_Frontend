<template>
  <section>
    <product-item
      v-for="product in productsArray"
      :key="product.id"
      :id="product.id"
      :name="product.name"
      :price="product.price"
      :url="product.url"
      :images="product.images"
    ></product-item>
  </section>
</template>

<script>
import ProductItem from "../components/product/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  computed: {
    productsArray() {
      return this.$store.getters['products/products'];
    },
  },
};
</script>

<style scoped>
section{
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
}
</style>
