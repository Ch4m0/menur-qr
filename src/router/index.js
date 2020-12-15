import Vue from "vue";
import VueRouter from "vue-router";
import ListProduct from "../components/ListProduct.vue";
// import HelloWorld from "../components/HelloWorld";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "about",
  //   component: HelloWorld
  // },
  {
    path: "/menu/:id",
    component: ListProduct
  }
];

const router = new VueRouter({
  routes,
  mode: "history"
});

export default router;
