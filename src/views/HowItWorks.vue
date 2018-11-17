<template>
    <Page pageClass="how-it-works">
        <Hero
            titleTop="How It"
            titleBottom="Works"
            content="Monthly reporting, on time, every time. Here's how we do it."
            buttonLink="/"
            buttonText="Get Started"
            buttonTitle="Get Started"
            imageSrc="how-it-works-hero-cactus.png"
            imageAlt="Hero Image"
        />
        <Partners
            title="We Have A Little Help From Our Friends"
            content="We partner with the industry's most trusted data providers to deliver your monthly reports."
            :partners="partners"
        />
        <WhatYouDo
            title="What You Must Do"
            sectionTitle="The process is simple."
            content="You provide us your information, we give you the data and ability to track your asset’s value over time..."
            :steps="steps"
        />
        <WhatWeDo
            title="What We Do"
            sectionTitle="WhatsMy: Your Handy Sidekick"
            content="Think of WhatsMy as an extension of your team. For each step the customer makes, WhatsMy makes a step too. Customer’s aren’t in the buying journey alone."
            frontImageSrc="birds.png"
            frontImageAlt="Front Image"
            backImageSrc="homepage-hero-cactus.png"
            backImageAlt="Back Image"
        />
        <SimpleCTA
            title="Get Started"
            buttonLink="/"
            buttonText="Get Started"
            buttonTitle="Get Started"
        />
    </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import Hero from "@/components/how-it-works/Hero.vue";
import Partners from "@/components/how-it-works/Partners.vue";
import WhatYouDo from "@/components/how-it-works/WhatYouDo.vue";
import WhatWeDo from "@/components/how-it-works/WhatWeDo.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "how-it-works",
  components: {
    Page,
    Hero,
    Partners,
    WhatYouDo,
    WhatWeDo,
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
          src: "partner-teranet.png",
          alt: "Teranet"
        },
        {
          src: "partner-mpac.png",
          alt: "MPAC"
        }
      ],
      steps: [
        {
          title: "Create Account",
          content: "Sign up for WhatsMy and create your free account."
        },
        {
          title: "Complete Details",
          content: "Tell us about your home and/or vehicle."
        },
        {
          title: "See Results",
          content: "Sit back, relax and receive valuable monthly updates."
        }
      ]
    };
  }
};
</script>
