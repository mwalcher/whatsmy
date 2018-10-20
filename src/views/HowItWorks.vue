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
        <Partners
            title="We Get Some Help From Our Friends"
            content="Our goal is to take the heavy lifting off your back. We rely on our team of experts to help us do it."
            :partners="partners"
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
import Partners from "@/components/how-it-works/Partners.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "how-it-works",
  components: {
    Hero,
    Partners,
    SimpleCTA
  },
  data() {
    return {
      partners: [
        {
          src: "partner-black-book.png",
          alt: "Canadian Black Book"
        },
        {
          src: "partner-trans-union.png",
          alt: "TransUnion"
        },
        {
          src: "partner-black-book.png",
          alt: "Canadian Black Book"
        },
        {
          src: "partner-trans-union.png",
          alt: "TransUnion"
        }
      ]
    };
  }
};
</script>
