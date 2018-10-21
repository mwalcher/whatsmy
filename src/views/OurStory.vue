<template>
    <main class="our-story">
        <Hero
            titleTop="WhatsMy:"
            titleBottom="A Digital App"
            buttonLink="/"
            buttonText="Get Started"
            buttonTitle="Get Started"
            :pageNavigation="pageNavigation"
            imageSrc="homepage-hero-cactus.png"
            imageAlt="Hero Image"
        />
        <SimpleCTA
            title="Get Started"
            buttonLink="/"
            buttonText="Get Started"
            buttonTitle="Get Started"
        />
    </main>
</template>

<script>
import Hero from "@/components/our-story/Hero.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "our-story",
  components: {
    Hero,
    SimpleCTA
  },
  data() {
    return {
      pageNavigation: [
        {
          anchor: "fast-facts",
          title: "Some Fast Facts"
        },
        {
          anchor: "origin-story",
          title: "Origin Story"
        }
      ]
    };
  }
};
</script>
