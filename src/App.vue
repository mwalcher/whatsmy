<template>
    <div id="app">
        <transition name="page-transition" mode="out-in" :duration="{ enter: 500, leave: 500 }">
            <router-view/>
        </transition>
    </div>
</template>

<script>
export default {
  name: "app"
};

const scrollOptions = {
  header: "header",
  offset: 50
};

// eslint-disable-next-line
new SmoothScroll('a[href*="#"]', scrollOptions);
</script>

<style lang="scss">
@import "assets/sass/app";
</style>
