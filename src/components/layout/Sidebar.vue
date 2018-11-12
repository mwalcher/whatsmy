<template>
    <div class="sidebar-container">
        <div class="mobile-hero">
            <slot name="mobile-hero"></slot>
        </div>

        <div class="sidebar">
            <nav class="sidebar-navigation" :class="{navFixed, navBottom}">
                <h2>Filter by tier:</h2>
                <ul>
                    <li
                        v-for="(navItem) in navigation"
                        :key="navItem.anchor"
                    >
                        <a
                            :href="`#${navItem.anchor}`"
                            @click="$emit('setActive', navItem.anchor)"
                            :title="navItem.title"
                            :class="{active : activeSection === navItem.anchor}"
                            class="nav-link"
                        >{{navItem.title}}<span>></span></a>
                    </li>
                </ul>
            </nav>
        </div>

        <div class="sidebar-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    navigation: {
      type: Array,
      required: true
    },
    activeSection: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      navFixed: false,
      navBottom: false
    };
  },
  methods: {
    fixedNavigation: function() {
      const sidebar = document.querySelector(".sidebar");
      const sidebarNav = document.querySelector(".sidebar-navigation");
      const header = document.querySelector("header");
      const offset = header.offsetHeight;

      const sidebarPosition = sidebar.getBoundingClientRect();
      const sidebarTop = sidebarPosition.top - (offset + 60);
      const sidebarBottom = sidebarPosition.bottom - (offset + 120);
      const sidebarLeft = sidebarPosition.left;
      const sidebarNavHeight = sidebarNav.offsetHeight;

      if (sidebarTop <= 0 && sidebarBottom >= sidebarNavHeight) {
        this.navBottom = false;
        this.navFixed = true;
        sidebarNav.style.left = `${sidebarLeft}px`;
      } else if (sidebarTop <= 0 && sidebarBottom < sidebarNavHeight) {
        this.navFixed = false;
        this.navBottom = true;
        sidebarNav.style.left = 0;
      } else {
        this.navFixed = false;
        sidebarNav.style.left = 0;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.fixedNavigation);
  },
  destroyed() {
    window.removeEventListener("scroll", this.fixedNavigation);
  }
};
</script>
