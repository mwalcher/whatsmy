<template>
    <section class="use-case">
        <div class="container">
            <div
                v-for="(option, index) in options"
                :key="index"
                class="use-case-option"
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-mirror="true"
            >
                <div class="desktop-image image-container">
                    <img
                        :src="require(`@/assets/images/${option.image.src}`)"
                        :alt="option.image.alt"
                    />
                </div>

                <div class="content-container">
                    <h2 v-if="index === 0" class="subtitle">{{title}}</h2>
                    <h3>{{option.title}}</h3>
                    <div class="mobile-image image-container">
                        <img
                            :src="require(`@/assets/images/${option.image.src}`)"
                            :alt="option.image.alt"
                        />
                    </div>
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
