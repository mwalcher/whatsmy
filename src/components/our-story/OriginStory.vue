<template>
    <section class="origin-story">
        <div class="container">
            <div class="origin-content">
                <div class="content-container">
                    <h2 class="subtitle">{{title}}</h2>
                    <h3 class="h2">{{sectionTitle}}</h3>
                    <p>{{content}}</p>
                </div>
                <ul class="findings-list">
                    <li
                        v-for="(finding, index) in findings"
                        :key="index"
                        class="finding"
                    >
                        <h4>{{finding.title}}</h4>
                        <p>{{finding.content}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "OriginStory",
  props: {
    title: {
      type: String,
      required: true
    },
    sectionTitle: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    findings: {
      type: Array,
      required: true
    }
  }
};
</script>
