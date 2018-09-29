<template>
    <main class="home">
        <Hero
            titleTop="WhatsMy:"
            titleBottom="A Digital App"
            buttonLink="/"
            buttonText="Get Started"
            buttonTitle="Get Started"
            imageSrc="placeholder.png"
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
import Hero from "@/components/home/Hero.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "home",
  components: {
    Hero,
    SimpleCTA
  }
};
</script>
