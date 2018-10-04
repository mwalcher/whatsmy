<template>
    <div id="app" :class="{navigationOpen}">
        <Header :class="{headerFixed}" @toggleNavigation="toggleNavigation"/>
        <router-view/>
        <Footer/>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      navigationOpen: false,
      headerFixed: false
    };
  },
  methods: {
    toggleNavigation: function() {
      this.navigationOpen = !this.navigationOpen;
      document.body.classList.toggle("no-scroll");
    },
    headerTransition: function () {
        if(window.scrollY > 10 && !this.headerFixed) {
            this.headerFixed = true;
        } else if(window.scrollY <= 10 && this.headerFixed){
            this.headerFixed = false;
        }
    }
  },
  created () {
    window.addEventListener('scroll', this.headerTransition);
  },
  destroyed () {
    window.removeEventListener('scroll', this.headerTransition);
  }
};
</script>

<style lang="scss">
@import "assets/sass/app";
</style>
