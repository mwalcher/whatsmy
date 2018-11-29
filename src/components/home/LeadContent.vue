<template>
    <section class="lead-content">
        <div class="container">
            <div
                class="content-container"
                data-aos="line-animation"
                data-aos-offset="150"
                data-aos-mirror="true"
            >
                <p class="leadText">{{text}}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "LeadContent",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>
