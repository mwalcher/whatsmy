<template>
    <section class="image-banner">
        <div class="container">
            <div class="image-container">
                <img
                    :src="require(`@/assets/images/${imageSrc}`)"
                    :alt="imageAlt"
                />
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "SimpleHero",
  props: {
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
