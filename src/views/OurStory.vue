<template>
    <main class="our-story">
        <Hero
            titleTop="About"
            titleBottom="WhatsMy"
            content="WhatsMy empowers home and vehicle owners to make smarter decisions."
            buttonLink="/"
            buttonText="Sign Up For Free"
            buttonTitle="Sign Up For Free"
            :pageNavigation="pageNavigation"
            imageSrc="our-story-hero-cactus.png"
            imageAlt="Hero Image"
        />
        <FastFacts
            :id="pageNavigation[0].anchor"
            :facts="facts"
        />
        <OriginStory
            :id="pageNavigation[1].anchor"
            title="The Backstory"
            sectionTitle="The Findings That Lead to WhatsMy"
            content="We’ve been in the automotive space for about 4 years (number up for debate), and we’ve learned that these are the biggest challenges peopel face when purchasing a vehicle:"
            :findings="findings"
        />
        <SimpleCTA
            title="To Summarize"
            content="If you own a home and/or vehicle, you should know what they are worth. With decades of experience in the home and auto buying spaces, our team recognized that there is currently no centralized place where you can find out how much your assets have increased/decreased in value over time. With WhatsMy, our goal is to take the work off your plate by delivering the information you need — automatically, monthly, and free of charge. When you’re out living your life, we’re here in the background, making sure you have the information needed to make smarter decisions."
            :contentColumns="true"
            buttonLink="/"
            buttonText="Sign Up For Free"
            buttonTitle="Sign Up For Free"
        />
    </main>
</template>

<script>
import Hero from "@/components/our-story/Hero.vue";
import FastFacts from "@/components/our-story/FastFacts.vue";
import OriginStory from "@/components/our-story/OriginStory.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "our-story",
  components: {
    Hero,
    FastFacts,
    OriginStory,
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
            "WhatsMy was created by Mobials Inc. after a number of customers asked for home and vehicle values while they weren’t actively shopping for a home or vehicle."
        },
        {
          title: "Team",
          content:
            "We operate on one guiding principal – We believe consumers should have free, transparent access to valuation data for their home and/or vehicle."
        },
        {
          title: "Philosophy",
          content:
            "Our mission is to make home and vehicle ownership and shopping stress free."
        }
      ],
      findings: [
        {
          title: "Finding 1",
          content:
            "We’ve been in the automotive space for about 4 years (number up for debate), and we’ve learned that."
        },
        {
          title: "Finding 2",
          content:
            "We’ve been in the automotive space for about 4 years (number up for debate), and we’ve learned that."
        },
        {
          title: "Finding 3",
          content:
            "We’ve been in the automotive space for about 4 years (number up for debate), and we’ve learned that."
        },
        {
          title: "Finding 4",
          content:
            "We’ve been in the automotive space for about 4 years (number up for debate), and we’ve learned that."
        }
      ]
    };
  }
};
</script>
