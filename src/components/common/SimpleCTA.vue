<template>
    <section class="simple-cta">
        <div class="container">
            <h2 v-if="title">{{title}}</h2>
            <p
                v-if="content"
                :class="{columns : contentColumns}"
            >{{content}}</p>
            <router-link
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
  name: "SimpleCTA",
  props: {
    title: String,
    content: String,
    contentColumns: {
      type: Boolean,
      default: false
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
    }
  }
};
</script>
