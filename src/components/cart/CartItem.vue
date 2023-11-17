<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img :src="item.image + '?v=' + Date.now()" alt="Product Image" />
    </div>
    <div class="cart-item__details">
      <p class="cart-item__details-title">{{ item.name }}</p>
      <p class="cart-item__details-amount">Amount: 1</p>
    </div>
    <p class="cart-item__price">{{ item.price }}$</p>
    <button class="cart-item__remove-button" @click="removeItem">Remove</button>
  </div>
</template>

<script>
export default {
  props: ["item"],
  methods: {
    removeItem() {
      this.$store.dispatch("cart/removeItemFromCart", this.item.id);
    },
  },
  mounted() {
    console.log(this.item);
  },
  created() {
    console.log(this.item);
  },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-bottom: 0.1rem solid #000;
  padding: 0 0.5rem 0.5rem 0.5rem;
  margin-bottom: 0.5rem;
}

.cart-item__details {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 0.5rem;
  width: 30rem;
}

.cart-item__details-title {
  font-size: 1.4rem;
  font-weight: 700;
}

.cart-item__details-amount {
  font-size: 1.2rem;
}

.cart-item__image {
  width: 4rem;
  height: 4rem;
}

.cart-item__image img {
  width: 100%;
  height: 100%;
}

.cart-item__price {
  font-size: 1.4rem;
  font-weight: 700;
}

.cart-item__remove-button {
  border: none;
  background-color: #ffca2d;
  color: #000;
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0.2rem 0.6rem;
  border-radius: 7rem;
  cursor: pointer;
}
</style>
