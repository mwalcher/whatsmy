<template>
    <main class="home">
        <Hero
            titleTop="WhatsMy:"
            titleBottom="A Digital App"
            buttonLink="/"
            buttonText="Get Started"
            buttonTitle="Get Started"
            imageSrc="placeholder-hero.png"
            imageAlt="Hero Image"
        />
        <LeadContent
            text="We get it, selling your home and car is hard. WhatsMy will provide you with this knowledge on a monthly basis, so when it’s time for you to buy or trade in your vehicle, alll you have to do is open your WhatsMy app and start using it."
        />
        <UseCase
            title="Use Cases"
            optionsTitleStart="WhatsMy"
            optionsTitleEnd="worth?"
            optionName="house"
            optionContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse eu."
            imageSrc="placeholder-use-case.png"
            imageAlt="Use Case Image"
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
import UseCase from "@/components/home/UseCase.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "home",
  components: {
    Hero,
    LeadContent,
    UseCase,
    SimpleCTA
  }
};
</script>
