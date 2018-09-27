<template>
    <div class="simple-cta">
        <div class="container">
            <h2 v-if="title">{{title}}</h2>
            <router-link
                :to="buttonLink"
                :title="buttonTitle"
                class="button"
            >
                {{buttonText}}
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "SimpleCTA",
  props: {
    title: String,
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
    }
  }
};
</script>
