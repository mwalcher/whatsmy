<template>
    <section class="simple-hero">
        <div class="container">
            <div v-if="imageSrc" class="image-container">
                <img
                    :src="require(`@/assets/images/${imageSrc}`)"
                    :alt="imageAlt"
                />
            </div>
            <h1 v-if="title">{{title}}</h1>
            <h1 v-if="titleTop && titleBottom">
                <span>{{titleTop}}</span>
                <span>{{titleBottom}}</span>
            </h1>
            <p v-if="content">{{content}}</p>
            <router-link
                v-if="buttonLink && buttonText && buttonTitle"
                exact
                :to="buttonLink"
                :title="buttonTitle"
                class="button"
            >
                {{buttonText}}
            </router-link>
        </div>
    </section>
</template>

<script>
export default {
  name: "SimpleHero",
  props: {
    title: String,
    titleTop: String,
    titleBottom: String,
    content: String,
    buttonLink: String,
    buttonText: String,
    buttonTitle: String,
    imageSrc: String,
    imageAlt: String
  }
};
</script>
