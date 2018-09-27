<template>
    <div class="home">
        <SimpleCTA
            title="Get Started"
            buttonLink="/"
            buttonText="Get Started"
            buttonTitle="Get Started"
        />
    </div>
</template>

<script>
import SimpleCTA from "@/components/common/SimpleCTA.vue";

export default {
  name: "home",
  components: {
    SimpleCTA
  }
};
</script>
