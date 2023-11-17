<template>
  <button @click="cartIsActive">
    <span><i class="fa-solid fa-cart-shopping"></i></span>
    <span>Cart</span>
    <span>{{ totalAmount }}</span>
  </button>
</template>

<script>
export default {
  computed: {
    totalAmount() {
      return this.$store.getters["cart/totalAmount"];
    },
  },
  methods: {
    cartIsActive() {
      this.$store.dispatch('cart/cartIsActive');
    }
  }
};
</script>

<style scoped>
button {
  border: none;
  display: flex;
  gap: 1rem;
  background-color: #00376b;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1.5rem;
  border-radius: 7rem;
  cursor: pointer;
}

i {
  color: #ffca2d;
}
</style>
