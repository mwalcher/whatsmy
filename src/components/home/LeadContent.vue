<template>
    <div class="lead-content">
        <div class="container">
            <div class="content-container">
                <p class="leadText">{{text}}</p>
            </div>
        </div>
    </div>
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
