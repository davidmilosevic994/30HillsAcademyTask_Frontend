function compareByPrice(a, b) {
  const priceA = parseInt(a.price, 10);
  const priceB = parseInt(b.price, 10);

  if (priceA < priceB) {
    return -1;
  } else if (priceA > priceB) {
    return 1;
  } else {
    return 0;
  }
}

function compareByPriceDescending(a, b) {
  const priceA = parseInt(a.price, 10);
  const priceB = parseInt(b.price, 10);

  if (priceA > priceB) {
    return -1;
  } else if (priceA < priceB) {
    return 1;
  } else {
    return 0;
  }
}

export default {
  sortAsc(context) {
    const array = context.state.filteredProducts.sort(compareByPrice);
    context.commit("sortAsc", array);
  },
  sortDesc(context) {
    const array = context.state.filteredProducts.sort(compareByPriceDescending);
    context.commit("sortDesc", array);
  },
  normalOrder(context) {
    const array = context.state.products;
    context.commit("normalOrder", array);
  },
};
