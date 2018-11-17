<template>
    <div class="page-container" :class="{navigationOpen}">
        <Header
            :class="{headerFixed}"
            @toggleNavigation="toggleNavigation"
            @closeNavigation="closeNavigation"
        />
        <main :class="pageClass">
            <slot></slot>
        </main>
        <Footer/>
        <div class="yellow-gradient line-transition"/>
    </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  name: "Page",
  components: {
    Header,
    Footer
  },
  props: {
    pageClass: {
      type: String,
      required: true
    }
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
    closeNavigation: function() {
      this.navigationOpen = false;
      document.body.classList.remove("no-scroll");
    },
    headerTransition: function() {
      if (window.scrollY > 10 && !this.headerFixed) {
        this.headerFixed = true;
      } else if (window.scrollY <= 10 && this.headerFixed) {
        this.headerFixed = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.headerTransition);
  },
  destroyed() {
    window.removeEventListener("scroll", this.headerTransition);
  }
};
</script>
