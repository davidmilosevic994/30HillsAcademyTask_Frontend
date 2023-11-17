<template>
  <article v-if="images">
    <div class="product">
      <img
        :src="firstImage + '?v=' + Date.now()"
        alt="Product description"
        class="product__img"
      />
      <div class="product__details">
        <h2 class="product__details-title">
          {{ name }}
        </h2>
        <div class="product__details-shop">
          <p>{{ price }}$</p>
          <button @click="addToCart">
            <i
              class="fa-solid fa-cart-shopping fa-xl"
              style="color: #000000"
            ></i>
          </button>
        </div>
      </div>
    </div>
    <router-link class="product-button-details" :to="productDetailLink"
      >View Details</router-link
    >
  </article>
</template>

<script>
export default {
  props: ["id", "name", "price", "url", "images"],
  computed: {
    productDetailLink() {
      return "/products/" + this.url;
    },
    firstImage() {
      return this.images.length > 0 ? this.images[0] : 'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg?w=740&t=st=1700213962~exp=1700214562~hmac=d09550922ad57d6a44667ea12f8581be344ebeff2191a4a93df3bbd6227b7fc6';
    },
  },
  methods: {
    addToCart() {
      const item =  {
        id: this.id,
        name: this.name,
        price: this.price,
        image: this.images[0]
      }

      this.$store.dispatch('cart/addItemToCart', item);
    }
  }
};
</script>

<style scoped>
article {
  width: 26rem;
  height: 32rem;
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.product {
  width: 100%;
  height: 100%;
}

.product__img {
  width: 100%;
  height: 14.6rem
}

.product__details {
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
}

.product__details-title{
  height: 4rem;
}

.product__details-shop {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product__details-shop p {
  font-size: 2.6rem;
  font-weight: 700;
}

.product-button-details {
  background-color: #002242;
  border: none;
  color: #fff;
  text-align: center;
  font-size: 1.5rem;
  width: 100%;
  cursor: pointer;
  padding: 1rem 0;
}

.product__details-shop button {
  background-color: #ffca2d;
  border: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  cursor: pointer;
}

a {
  text-decoration: none;
}
</style>
