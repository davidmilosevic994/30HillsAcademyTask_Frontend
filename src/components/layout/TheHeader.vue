<template>
  <header class="header">
    <div class="header-box">
      <div class="header-box__logo">GLOBO</div>
      <nav class="header-box__nav">
        <router-link to="/products">Products</router-link>
      </nav>
      <div class="header-box__search">
        <input type="text" placeholder="Enter a search term" />
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div class="header-box__buttons">
        <div class="header-box__buttons-box">
          <i class="fa-solid fa-user"></i>
          <h3>Login</h3>
        </div>
        <header-cart-button></header-cart-button>
      </div>
    </div>
  </header>
</template>

<script>
import HeaderCartButton from "../cart/HeaderCartButton.vue";

export default {
  components: {
    HeaderCartButton,
  },
};
</script>

<style scoped>
.header {
  background-color: #002242;
}

.header-box {
  background-color: #002242;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem 1.5rem 3rem;
  color: #fff;
  font-size: 1.5rem;
  max-width: 120rem;
  margin: 0 auto;
}

.header-box__logo {
  font-family: "Orbitron";
  font-weight: 800;
  font-size: 4rem;
  color: #ffca2d;
}

.header-box__search {
  height: 100%;
  width: 35rem;
  background-color: #fff;
  border-radius: 7rem;
  display: flex;
  align-items: center;
  color: #b5b8b9;
  padding: 1rem 1rem 1rem 2rem;
}

.header-box__search input {
  width: 100%;
  background-color: transparent;
  border: none;
  color: #b5b8b9;
}

.header-box__search input::placeholder {
  color: #b5b8b9;
}

.header-box__search input:focus {
  border: none;
  outline: none;
}

.header-box__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.header-box__buttons-box {
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
  color: #fff;
}
</style>
