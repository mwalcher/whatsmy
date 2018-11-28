<template>
    <section class="features">
        <div class="container">
            <div class="content-container">
                <h2 class="subtitle">{{title}}</h2>
                <h3 class="h2">{{sectionTitle}}</h3>
                <ul class="feature-list rellax" data-rellax-speed="3" data-rellax-percentage="1.125">
                    <li
                        v-for="(feature, index) in features"
                        :key="index"
                        class="feature"
                    >
                        <h4>{{feature.title}}</h4>
                        <p>{{feature.content}}</p>
                    </li>
                </ul>
            </div>
        </div>
        <div class="image-container rellax" data-rellax-speed="1" data-rellax-percentage="0.5">
            <img
                :src="require(`@/assets/images/${imageSrc}`)"
                :alt="imageAlt"
            />
        </div>
        <div class="bar-detail rellax" data-rellax-speed="2" data-rellax-percentage="0.5"/>
    </section>
</template>

<script>
export default {
  name: "Features",
  props: {
    title: {
      type: String,
      required: true
    },
    sectionTitle: {
      type: String,
      required: true
    },
    features: {
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
