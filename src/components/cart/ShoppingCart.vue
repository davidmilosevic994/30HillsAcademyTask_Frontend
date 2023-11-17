<template>
  <section>
    <div class="cart">
      <div class="cart-close">
        <button class="cart-close__button" @click="unactiveCart">
          <i class="fa-solid fa-xmark fa-lg"></i>
        </button>
      </div>
      <div v-if="hasItems">
        <cart-item
          v-for="item in cartItems"
          :key="item.id"
          :item="item"
        ></cart-item>
      </div>
      <div v-else>
        <p class="cart-empty">Your Cart Is Empty</p>
      </div>
    </div>
    <button class="cart-order__button">Order Now</button>
  </section>
</template>

<script>
import CartItem from "./CartItem.vue";

export default {
  components: {
    CartItem,
  },
  computed: {
    cartItems() {
      return this.$store.getters["cart/cart"];
    },
    hasItems() {
      return this.$store.getters["cart/hasItems"];
    },
  },
  methods: {
    unactiveCart() {
      this.$store.dispatch("cart/cartIsNotActive");
    },
  },
};
</script>

<style scoped>
section {
  width: 45rem;
  background-color: #fff;
  border: 0.2rem solid black;
  position: absolute;
  top: 60px;
  right: 200px;
}

.cart {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0.5rem;
}

.cart-close {
  display: flex;
  align-content: center;
  justify-content: flex-end;
}

.cart-close__button {
  border: none;
  cursor: pointer;
  background-color: #ffca2d;
  color: #000;
  border-radius: 50%;
  padding: 0.4rem 0.6rem;
}

.cart-order__button {
  width: 100%;
  height: 3rem;
  color: #fff;
  background-color: #002242;
  border: none;
  cursor: pointer;
}

.cart-empty{
  font-size: 2rem;
  color: #000;
  font-weight: 700;
  text-align: center;
  padding: 1.5rem;
}
</style>
