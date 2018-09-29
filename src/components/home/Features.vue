<template>
    <section class="features">
        <div class="container">
            <div class="content-container">
                <h2 class="subtitle">{{title}}</h2>
                <h3 class="h2">{{sectionTitle}}</h3>
                <ul class="feature-list">
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
        <div class="image-container">
            <img
                :src="require(`@/assets/images/${imageSrc}`)"
                :alt="imageAlt"
            />
        </div>
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
