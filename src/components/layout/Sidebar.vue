<template>
    <div class="sidebar-container">
        <div class="sidebar">
            <nav class="sidebar-navigation">
                <ul>
                    <li
                        v-for="(navItem) in navigation"
                        :key="navItem.anchor"
                    >
                        <a
                            :href="`#${navItem.anchor}`"
                            :title="navItem.title"
                            class="cta-link"
                        >{{navItem.title}}</a>
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
    }
  }
};
</script>
