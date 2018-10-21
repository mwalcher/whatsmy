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
        <FastFacts
            :id="pageNavigation[0].anchor"
            :facts="facts"
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
import FastFacts from "@/components/our-story/FastFacts.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "our-story",
  components: {
    Hero,
    FastFacts,
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
      ],
      facts: [
        {
          title: "Origin",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
          title: "Team",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        },
        {
          title: "Philosophy",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna."
        }
      ]
    };
  }
};
</script>
