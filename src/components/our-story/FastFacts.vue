<template>
    <section class="fast-facts">
        <div class="fast-facts-container">
            <div class="container">
                <ul class="facts-list">
                    <li
                        v-for="(fact, index) in facts"
                        :key="index"
                        class="fact"
                    >
                        <h3>{{fact.title}}</h3>
                        <p>{{fact.content}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "FastFacts",
  props: {
    facts: {
      type: Array,
      required: true
    }
  }
};
</script>
