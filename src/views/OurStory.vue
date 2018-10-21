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
        <OriginStory
            :id="pageNavigation[1].anchor"
            title="The Backstory"
            sectionTitle="The Findings That Lead to WhatsMy"
            content="We’ve been in the automotive space for about 4 years (number up for debate), and we’ve learned that these are the biggest challenges peopel face when purchasing a vehicle:"
            :findings="findings"
        />
        <SimpleCTA
            title="To Summarize"
            content="After years of work in the automotive and home buying (word choice?) space working to deliver more transparency to the buyer on their purchasing journey, we realized the biggest challenge people have is having one centralized place for accurate knowledge. We’ve released a number of products that have been readily available on third party dealership websites. With WhatsMy, however, our goal is to take the work off the consumer’s plate by bringing information to you, so you have time to do the things that really matter."
            contentColumns="true"
            buttonLink="/"
            buttonText="Get Started"
            buttonTitle="Get Started"
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
