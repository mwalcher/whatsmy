<template>
    <div class="accordion">
        <h3>{{title}}</h3>
        <button>View Answer</button>
        <div class="content-container">
            <p
                v-for="(content, index) in body"
                :key="index"
            >
                {{content}}
            </p>
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
  }
};
</script>
