<template>
    <section class="accordion-list">
        <div class="container">
            <div class="accordion-section">
                <h2 v-if="title" class="subtitle">{{title}}</h2>
                <Accordion
                    v-for="(accordion, index) in accordions"
                    :key="index"
                    :title="accordion.title"
                    :body="accordion.body"
                />
            </div>
        </div>
    </section>
</template>

<script>
import Accordion from "@/components/faq/Accordion.vue";

export default {
  name: "AccordionList",
  components: {
    Accordion
  },
  props: {
    title: String,
    accordions: {
      type: Array,
      required: true
    }
  }
};
</script>
