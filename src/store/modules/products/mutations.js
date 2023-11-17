export default {
  sortAsc(state, payload) {
    state.filteredProducts = payload;
  },
  sortDesc(state, payload) {
    state.filteredProducts = payload;
  },
  normalOrder(state, payload) {
    state.filteredProducts = payload;
  },
};
