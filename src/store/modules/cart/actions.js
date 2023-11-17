export default {
  addItemToCart(context, item) {
    context.commit("addToCart", item);
  },
  removeItemFromCart(context, id) {
    const itemIndex = context.state.items.findIndex((item) => item.id === id);

    if (itemIndex !== -1) {
      context.commit("removeFromCart", itemIndex);
    }
  },
  cartIsActive(context) {
    context.commit("activeCart");
  },
  cartIsNotActive(context) {
    context.commit("unactiveCart");
  }
};
