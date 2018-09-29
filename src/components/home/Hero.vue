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
                        :to="buttonLink"
                        :title="buttonTitle"
                        class="button"
                    >
                        {{buttonText}}
                    </router-link>
                </div>

                <div class="hero-gradient"/>

                <div class="image-container">
                    <img
                        :src="require(`@/assets/images/${imageSrc}`)"
                        :alt="imageAlt"
                    />
                </div>
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
