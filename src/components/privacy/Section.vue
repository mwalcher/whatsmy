<template>
    <section class="privacy-section">
        <div class="container">
            <h2 class="subtitle">{{title}}</h2>
            <p
                v-for="(content, index) in body"
                :key="index"
            >
                {{content}}
            </p>
        </div>
    </section>
</template>

<script>
export default {
  name: "PrivacySection",
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: Array,
      required: true
    }
  }
};
</script>
