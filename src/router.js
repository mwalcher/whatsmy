import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Privacy from "./views/Privacy.vue";

Vue.use(Router);

export const routes = {
  home: "/",
  howItWorks: "/",
  ourStory: "/",
  contact: "/",
  faq: "/",
  privacy: "/privacy"
};

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: routes.home,
      name: "home",
      component: Home
    },
    {
      path: routes.privacy,
      name: "privacy",
      component: Privacy
    }
  ]
});
