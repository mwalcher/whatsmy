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
        <LeadContent
            text="We get it, selling your home and car is hard. WhatsMy will provide you with this knowledge on a monthly basis, so when it’s time for you to buy or trade in your vehicle, alll you have to do is open your WhatsMy app and start using it."
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
import LeadContent from "@/components/home/LeadContent.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "home",
  components: {
    Hero,
    LeadContent,
    SimpleCTA
  }
};
</script>
