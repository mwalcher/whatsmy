import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import FAQ from "./views/FAQ.vue";
import Privacy from "./views/Privacy.vue";

Vue.use(Router);

export const routes = {
  home: "/",
  howItWorks: "/",
  ourStory: "/",
  contact: "/",
  faq: "/faq",
  privacy: "/privacy"
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: routes.home,
      name: "home",
      component: Home
    },
    {
      path: routes.faq,
      name: "faq",
      component: FAQ
    },
    {
      path: routes.privacy,
      name: "privacy",
      component: Privacy
    }
  ]
});
