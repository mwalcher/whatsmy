<template>
    <main class="how-it-works">
        <Hero
            title="How WhatsMy Works"
            content="Think of WhatsMy as an extension of your team. On demand, on time, all the time. Here’s how we do it."
            buttonLink="/"
            buttonText="Get Started"
            buttonTitle="Get Started"
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
import Hero from "@/components/how-it-works/Hero.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "how-it-works",
  components: {
    Hero,
    SimpleCTA
  }
};
</script>
