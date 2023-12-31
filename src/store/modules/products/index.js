import productsData from '../../../products.json';
import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            products: productsData.products.data.items,
            filteredProducts: productsData.products.data.items
        }
    },
    mutations,
    actions,
    getters
}