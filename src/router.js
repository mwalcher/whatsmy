import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import HowItWorks from "./views/HowItWorks.vue";
import OurStory from "./views/OurStory.vue";
import Contact from "./views/Contact.vue";
import FAQ from "./views/FAQ.vue";
import Privacy from "./views/Privacy.vue";

Vue.use(Router);

export const routes = {
  home: "/",
  howItWorks: "/how-it-works",
  ourStory: "/our-story",
  contact: "/contact",
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
      path: routes.howItWorks,
      name: "how-it-works",
      component: HowItWorks
    },
    {
      path: routes.ourStory,
      name: "our-story",
      component: OurStory
    },
    {
      path: routes.contact,
      name: "contact",
      component: Contact
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
