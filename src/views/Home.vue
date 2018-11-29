<template>
    <Page pageClass="home">
        <Hero
            titleTop="Values Change."
            titleBottom="Stay in the Know."
            buttonLink="/"
            buttonText="Sign Up For Free"
            buttonTitle="Sign Up For Free"
            imageSrc="homepage-hero-cactus.png"
            imageAlt="Hero Image"
        />
        <LeadContent
            text="WhatsMy makes staying on top of your home and vehicle values easy. You paid for them, you should know what they are worth. Sign up to get FREE monthly updates."
        />
        <UseCase
            title="Use Cases"
            :options="options"
        />
        <Features
            title="Features"
            sectionTitle="Use WhatsMy and you’ll never have to guess again."
            imageSrc="device-mockup.png"
            imageAlt="Features Image"
            :features="features"
        />
        <SimpleCTA
            title="Get Started"
            buttonLink="/"
            buttonText="Sign Up For Free"
            buttonTitle="Sign Up For Free"
        />
    </Page>
</template>

<script>
import Rellax from "rellax";
let rellax;

import Page from "@/components/layout/Page.vue";
import Hero from "@/components/home/Hero.vue";
import LeadContent from "@/components/home/LeadContent.vue";
import UseCase from "@/components/home/UseCase.vue";
import Features from "@/components/home/Features.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "home",
  components: {
    Page,
    Hero,
    LeadContent,
    UseCase,
    Features,
    SimpleCTA
  },
  data() {
    return {
      options: [
        {
          title: "WhatsMy car worth?",
          image: {
            src: "car.png",
            alt: "Car Image"
          },
          content:
            "Your vehicle is one of your biggest asset. When you know what it's worth, you can make smarter financial decisions, confidently. By partnering with Canadian Black Book, WhatsMy delivers accurate, up-to-date, value information to keep you in the know."
        },
        {
          title: "WhatsMy house worth?",
          image: {
            src: "home.png",
            alt: "Home Image"
          },
          content:
            "Your home is your biggest asset. When you know what it's worth, you can make smarter financial decisions, confidently. By partnering with MPAC and Teranet, WhatsMy delivers accurate, up-to-date, value information to keep you in the know."
        }
      ],
      features: [
        {
          title: "Your time is valuable.",
          content:
            "You have things to do. Let us research your home and vehicle values for you, so you always have the numbers in your back pocket."
        },
        {
          title: "Sent to you monthly.",
          content:
            "You never know when you'll need them, but when you do, you can find updated WhatsMy values in your inbox every month."
        },
        {
          title: "Data you can trust.",
          content:
            "We only partner with the industry's most reliable data sources. So you know you can trust the information we provide."
        },
        {
          title: "Free today, free always.",
          content:
            "They are your assets. You should know what they're worth, and it shouldn't cost you anything."
        }
      ]
    };
  },
  mounted() {
    rellax = new Rellax(".rellax");
  },
  destroyed() {
    rellax.destroy();
  }
};
</script>
