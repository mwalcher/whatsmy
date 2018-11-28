<template>
    <section class="what-we-do">
        <div class="container">
            <div class="what-we-do-content">
                <div class="media-container">
                    <div class="back-image image-container">
                        <img
                            :src="require(`@/assets/images/${backImageSrc}`)"
                            :alt="backImageAlt"
                        />
                    </div>

                    <div class="front-image image-container">
                        <img
                            :src="require(`@/assets/images/${frontImageSrc}`)"
                            :alt="frontImageAlt"
                        />
                    </div>
                </div>

                <div class="content-container">
                    <h2 class="subtitle">{{title}}</h2>
                    <h3>{{sectionTitle}}</h3>
                    <p>{{content}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "WhatWeDo",
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
    frontImageSrc: {
      type: String,
      required: true
    },
    frontImageAlt: {
      type: String,
      required: true
    },
    backImageSrc: {
      type: String,
      required: true
    },
    backImageAlt: {
      type: String,
      required: true
    }
  }
};
</script>
