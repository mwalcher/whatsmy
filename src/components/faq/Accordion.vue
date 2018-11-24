<template>
    <div class="accordion" :class="{open : isOpen}">
        <h3>{{title}}</h3>
        <button class="cta-link" @click="toggleAccordion">View Answer</button>
        <div class="accordion-content">
            <div class="content-container">
                <p
                    v-for="(content, index) in body"
                    :key="index"
                >
                    {{content}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    title: {
      type: String,
      required: true
    },
    body: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleAccordion: function() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
