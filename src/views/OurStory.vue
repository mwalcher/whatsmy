<template>
    <Page pageClass="our-story">
        <Hero
            titleTop="About"
            titleBottom="WhatsMy"
            content="WhatsMy empowers home and vehicle owners to make smarter decisions."
            buttonLink="/"
            buttonText="Sign Up For Free"
            buttonTitle="Sign Up For Free"
            imageSrc="our-story-hero-cactus.png"
            imageAlt="Hero Image"
        />
        <FastFacts
            :facts="facts"
        />
        <Team
            title="The Leadership Team"
            sectionTitle="Get to know the people behind WhatsMy"
            :team="team"
        />
        <SimpleCTA
            title="To Summarize"
            content="If you own a home and/or vehicle, you should know what they are worth. With decades of experience in the home and auto buying spaces, our team recognized that there is currently no centralized place where you can find out how much your assets have increased/decreased in value over time. With WhatsMy, our goal is to take the work off your plate by delivering the information you need — automatically, monthly, and free of charge. When you’re out living your life, we’re here in the background, making sure you have the information needed to make smarter decisions."
            :contentColumns="true"
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
import Hero from "@/components/our-story/Hero.vue";
import FastFacts from "@/components/our-story/FastFacts.vue";
import Team from "@/components/our-story/Team.vue";
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "our-story",
  components: {
    Page,
    Hero,
    FastFacts,
    Team,
    SimpleCTA
  },
  data() {
    return {
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
      team: [
        {
          name: "James Hayes",
          title: "Co-Founder, CEO",
          linkedin: "https://www.linkedin.com/in/james-hayes-8bb86111/",
          image: {
            src: "team-james.jpg",
            alt: "James Hayes"
          },
          content:
            "Focused, driven, imaginative. James is responsible for providing the vision, thought leadership, and business strategy. It is James’s ability to focus on the big picture while maintaining quality on the finest details that facilitates Mobials success."
        },
        {
          name: "Brad Hanebury",
          title: "Co-Founder, CTO",
          linkedin: "https://www.linkedin.com/in/brad-hanebury-8589b66/",
          image: {
            src: "team-brad.jpg",
            alt: "Brad Hanebury"
          },
          content:
            "Brad provides the architecture and direction for all of Mobials’ products. His focus is on scaling applications across multiple verticals and locales, while keeping in mind that the ultimate goal of application development is to enable a positive user experience."
        },
        {
          name: "Marty Meadows",
          title: "Co-Founder,",
          subtitle: "President (Automotive)",
          linkedin: "https://www.linkedin.com/in/marty-meadows-2738528/",
          image: {
            src: "team-martym.jpg",
            alt: "Marty Meadows"
          },
          content:
            "Marty has a unique combination of business strategy, operational acumen and sales expertise. While designing Mobials’ business strategy and facilitating contract management, Marty works with partners on strategic development."
        },
        {
          name: "David Brebner",
          title: "Co-Founder, CFO",
          linkedin: "https://www.linkedin.com/in/davidbrebner/",
          image: {
            src: "team-dave.jpg",
            alt: "David Brebner"
          },
          content:
            "Dave’s breadth of historical clients in various industries and his own entrepreneurial activities provide a foundation of knowledge and experiences to support his financial, accounting, governance and structural guidance."
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
