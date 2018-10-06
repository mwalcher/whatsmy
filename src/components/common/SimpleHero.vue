<template>
    <section class="simple-hero">
        <div class="container">
            <h1 v-if="title">{{title}}</h1>
            <p v-if="content">{{content}}</p>
            <router-link
                v-if="buttonLink && buttonText && buttonTitle"
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
    content: String,
    buttonLink: String,
    buttonText: String,
    buttonTitle: String
  }
};
</script>
