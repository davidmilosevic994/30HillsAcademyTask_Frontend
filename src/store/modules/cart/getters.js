export default {
  cart(state) {
    return state.items;
  },
  hasItems(state) {
    return state.items && state.items.length > 0;
  },
  totalAmount(state) {
    return state.items.length;
  },
  activeCart(state) {
    return state.cartActive;
  }
};
