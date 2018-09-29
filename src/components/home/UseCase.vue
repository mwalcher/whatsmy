<template>
    <section class="use-case">
        <div class="container">
            <div class="use-case-content">
                <div class="image-container">
                    <img
                        :src="require(`@/assets/images/${imageSrc}`)"
                        :alt="imageAlt"
                    />
                </div>

                <div class="content-container">
                    <h2 class="subtitle">{{title}}</h2>
                    <h3 class="option-title h2">
                        <span class="overlap">{{optionsTitleStart}}</span>
                        <button>{{optionName}}</button>
                        <span>{{optionsTitleEnd}}</span>
                    </h3>
                    <p>{{optionContent}}</p>
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
    optionsTitleStart: {
      type: String,
      required: true
    },
    optionsTitleEnd: {
      type: String,
      required: true
    },
    optionName: {
      type: String,
      required: true
    },
    optionContent: {
      type: String,
      required: true
    },
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
