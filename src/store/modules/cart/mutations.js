export default {
  addToCart(state, payload) {
    state.items.push(payload);
  },
  removeFromCart(state, payload) {
    state.items.splice(payload, 1);
  },
  activeCart(state) {
    state.cartActive = true;
  },
  unactiveCart(state) {
    state.cartActive = false;

  }
};
