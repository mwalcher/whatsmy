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
        <WhatYouDo
            title="What You Must Do"
            sectionTitle="The process is simple."
            content="You provide us with your information, we give you the data and ability to track your asset’s worth over time..."
            :steps="steps"
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
import WhatYouDo from "@/components/how-it-works/WhatYouDo.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "how-it-works",
  components: {
    Hero,
    Partners,
    WhatYouDo,
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
      ],
      steps: [
        {
          title: "Choose What You Want",
          content:
            "Sign up for WhatsMy and provide your information about your assets."
        },
        {
          title: "Choose What You Want",
          content:
            "Receive monthly updates from WhatsMy on the value of your assets."
        },
        {
          title: "Choose What You Want",
          content:
            "Sign in to make adjustmets to your assets and add new vehicles."
        }
      ]
    };
  }
};
</script>
