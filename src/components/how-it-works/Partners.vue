<template>
    <section class="partners">
        <div class="container">
            <div class="content-container">
                <h2 class="subtitle">{{title}}</h2>
                <p class="leadText">{{content}}</p>
            </div>
            <ul
                class="partner-list"
                data-aos="fade-up"
                data-aos-offset="150"
                data-aos-mirror="true"
            >
                <li
                    v-for="(partner, index) in partners"
                    :key="index"
                    class="partner"
                >
                    <div class="image-container">
                        <img
                            :src="require(`@/assets/images/${partner.src}`)"
                            :alt="partner.alt"
                        />
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
  name: "Partners",
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    partners: {
      type: Array,
      required: true
    }
  }
};
</script>
