<template>
    <div id="app" :class="{navigationOpen}">
        <Header @toggleNavigation="toggleNavigation"/>
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
      navigationOpen: false
    };
  },
  methods: {
    toggleNavigation: function() {
      this.navigationOpen = !this.navigationOpen;
      document.body.classList.toggle('no-scroll');
    }
  }
};
</script>

<style lang="scss">
@import "assets/sass/app";
</style>
