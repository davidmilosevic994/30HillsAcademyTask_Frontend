import { createRouter, createWebHistory } from "vue-router";

import ProductsList from "./pages/ProductsList.vue";
import ProductDetails from "./pages/ProductDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/products" },
    { path: "/products", component: ProductsList },
    { path: "/products/:url", component: ProductDetails, props: true },
  ],
});

export default router;
