<template>
  <section>
    <header>
      <span>{{ categoryName }} > </span><span>{{ selectedProduct.name }}</span>
    </header>
    <div class="product">
      <div class="product__image">
        <product-carousel :images="selectedProduct.images"></product-carousel>
      </div>
      <div class="product__detail">
        <h3 class="product__detail-id">Product ID: {{ selectedProduct.id }}</h3>
        <h2 class="product__detail-name">{{ selectedProduct.name }}</h2>
        <h3 class="product__detail-price">{{ selectedProduct.price }}$</h3>
        <div>
          <h3 class="product__detail-features">Features</h3>
          <div
            class="product__detail-fetures-box"
            v-html="selectedProduct.features"
          ></div>
        </div>
        <button @click="addToCart">Add To Cart</button>
      </div>
      <div class="product__description">
        <h3 class="product__description-title">Description</h3>
        <div class="product__description-box">
          <p>
            {{ selectedProduct.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProductCarousel from "../components/product/ProductCarousel.vue";

export default {
  components: {
    ProductCarousel,
  },
  props: ["url"],
  data() {
    return {
      selectedProduct: null,
    };
  },
  computed: {
    categoryName() {
      const category = this.selectedProduct.category;
      return category.charAt(0).toUpperCase() + category.slice(1);
    },
  },
  created() {
    this.selectedProduct = this.$store.getters["products/products"].find(
      (product) => product.url === this.url
    );
  },
  methods: {
    addToCart() {
      const item = {
        id: this.selectedProduct.id,
        name: this.selectedProduct.name,
        price: this.selectedProduct.price,
        image: this.selectedProduct.images[0],
      };

      this.$store.dispatch("cart/addItemToCart", item);
    },
  },
};
</script>

<style scoped>
header {
  border-bottom: 0.1rem solid black;
  font-size: 1.2rem;
  padding: 0.5rem;
}

.product {
  padding-top: 5rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: auto auto;
  column-gap: 3rem;
  row-gap: 1.5rem;
}

.product__image {
  padding: 5rem;
  border-radius: 0.5rem;
  background-color: #fff;
  position: relative;
}

.product__detail {
  padding: 2rem;
  border-radius: 0.5rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.product__detail-id {
  font-size: 1.2rem;
  font-weight: 300;
}

.product__detail-name {
  font-weight: 700;
  font-size: 2.8rem;
}

.product__detail-price {
  font-weight: 700;
  font-size: 3.4rem;
}

.product__detail-features {
  font-weight: 400;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
}

.product__detail-fetures-box {
  padding: 0.5rem;
  border: 0.1rem solid #000;
  font-size: 1.2rem;
  line-height: 2rem;
}

.product__description-title {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.product__description-box {
  padding: 0.5rem;
  border: 0.1rem solid #000;
  height: 10rem;
  font-size: 1.2rem;
  line-height: 1.6rem;
  background-color: #fff;
}

button {
  background-color: #ffca2d;
  border: none;
  border-radius: 25rem;
  width: 18rem;
  height: 4rem;
  align-self: center;
  cursor: pointer;
}
</style>
