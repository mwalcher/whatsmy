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
                        {{buttonText}}
                    </router-link>
                    <nav class="page-navigation">
                        <ul>
                            <li
                                v-for="navItem in pageNavigation"
                                :key="navItem.anchor"
                            >
                                <a
                                    :href="`#${navItem.anchor}`"
                                    :title="navItem.title"
                                >{{navItem.title}}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

        <div class="image-container">
            <img
                :src="require(`@/assets/images/${imageSrc}`)"
                :alt="imageAlt"
            />
            <div class="hero-gradient"/>
        </div>
    </section>
</template>

<script>
export default {
  name: "HowItWorksHero",
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
    pageNavigation: {
      type: Array,
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
