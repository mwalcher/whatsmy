<template>
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="content-container">
                    <h1>
                        <span>{{titleTop}}</span>
                        <span>{{titleBottom}}</span>
                    </h1>
                    <router-link
                        exact
                        :to="buttonLink"
                        :title="buttonTitle"
                        class="button"
                    >
                        <span>{{buttonText}}</span>
                    </router-link>
                </div>

                <div class="image-container">
                    <img
                        :src="require(`@/assets/images/${imageSrc}`)"
                        :alt="imageAlt"
                        class="rellax"
                        data-rellax-speed="3"
                    />
                </div>

                <div class="hero-gradient rellax" data-rellax-speed="1"/>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "HomeHero",
  props: {
    titleTop: {
      type: String,
      required: true
    },
    titleBottom: {
      type: String,
      required: true
    },
    buttonLink: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    buttonTitle: {
      type: String,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    }
  }
};
</script>
