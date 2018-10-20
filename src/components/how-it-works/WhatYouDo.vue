<template>
    <section class="what-you-do">
        <div class="container">
            <div class="content-container">
                <h2 class="subtitle">{{title}}</h2>
                <h3 class="h2">{{sectionTitle}}</h3>
                <p>{{content}}</p>
            </div>
            <ul class="steps-list">
                <li
                    v-for="(step, index) in steps"
                    :key="index"
                    class="step"
                >
                    <span class="number">
                        <span v-if="(index + 1) < 10">0</span>
                        <span>{{index + 1}}</span>
                    </span>
                    <h4>{{step.title}}</h4>
                    <p>{{step.content}}</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
  name: "WhatYouDo",
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
    steps: {
      type: Array,
      required: true
    }
  }
};
</script>
