<template>
    <section class="team">
        <div class="container">
            <div class="team-list">
                <div class="team-title">
                    <div class="title-container">
                        <h2 class="subtitle">{{title}}</h2>
                        <h3 class="h2">{{sectionTitle}}</h3>
                    </div>
                </div>
                <div
                    v-for="(leader, index) in team"
                    :key="index"
                    class="team-card"
                    data-tilt
                    data-aos="fade-up"
                    data-aos-offset="150"
                    data-aos-mirror="true"
                >
                    <div class="image-container">
                        <img
                            :src="require(`@/assets/images/${leader.image.src}`)"
                            :alt="leader.image.alt"
                        />
                        <div class="image-flag">
                            <a class="team-linkedin" :href="leader.linkedin" title="LinkedIn">
                                <span class="icon fab fa-linkedin-in"></span>
                                <span class="invisible">{{leader.name}} LinkedIn</span>
                            </a>
                            <p class="team-title">
                                {{leader.title}}
                                <span v-if="leader.subtitle">{{leader.subtitle}}</span>
                            </p>
                        </div>
                    </div>

                    <div class="content-container">
                        <h4>{{leader.name}}</h4>
                        <p class="content">{{leader.content}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import VanillaTilt from "vanilla-tilt";

export default {
  name: "Team",
  props: {
    title: {
      type: String,
      required: true
    },
    sectionTitle: {
      type: String,
      required: true
    },
    team: {
      type: Array,
      required: true
    }
  },
  mounted() {
    const tiltElements = document.querySelectorAll("[data-tilt]");
    const options = {
      max: 10,
      glare: false
    };
    tiltElements.forEach(element => VanillaTilt.init(element, options));
  },
  destroyed() {
    const tiltElements = document.querySelectorAll("[data-tilt]");
    tiltElements.forEach(element => element.vanillaTilt.destroy());
  }
};
</script>
