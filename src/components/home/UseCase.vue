<template>
    <section class="use-case">
        <div class="container">
            <div
                v-for="(option, index) in options"
                :key="index"
                class="use-case-option"
            >
                <div class="image-container">
                    <img
                        :src="require(`@/assets/images/${option.image.src}`)"
                        :alt="option.image.alt"
                    />
                </div>

                <div class="content-container">
                    <h2 v-if="index === 0" class="subtitle">{{title}}</h2>
                    <h3>{{option.title}}</h3>
                    <p>{{option.content}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "UseCase",
  props: {
    title: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  }
};
</script>
