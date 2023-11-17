<template>
  <header>
    <h2>Products</h2>
    <div class="sorting-box">
      <h3>Order By:</h3>
      <div class="sorting-box__buttons">
        <button @click="sortAsc">
          <i class="fa-solid fa-arrow-up fa-xl"></i>
        </button>
        <button @click="sortDesc">
          <i class="fa-solid fa-arrow-down fa-xl"></i>
        </button>
        <button @click="normalOrder">
          <i class="fa-solid fa-arrow-rotate-right fa-xl"></i>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    sortAsc() {
      this.$store.dispatch("products/sortAsc");
    },
    sortDesc() {
      this.$store.dispatch("products/sortDesc");
    },
    normalOrder() {
      this.$store.dispatch("products/normalOrder");
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  border-bottom: 0.1rem solid #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 1rem;
}

header h2 {
  font-size: 3.2rem;
}

.sorting-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
}

.sorting-box h3 {
  font-size: 1.2rem;
}

.sorting-box__buttons {
  display: flex;
  gap: 1rem;
}

button {
  border: none;
  background-color: #ffca2d;
  color: #000;
  padding: 0.5rem;
  cursor: pointer;
}
</style>
