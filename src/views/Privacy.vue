<template>
    <main class="privacy">
        <SimpleHero
            title="Privacy Policy"
            content="This Privacy Policy sets out Credsii’s approach to the collection, use and disclosure of personal info in connection with our business in Canada, including but not limited to personal information collected, used and disclosed when you access or use our Website."
        />
    </main>
</template>

<script>
import SimpleHero from "@/components/common/SimpleHero.vue";

export default {
  name: "privacy",
  components: {
    SimpleHero
  },
  data() {
    return {
      sections: [
        {
          title: "Everything at a glance.",
          content:
            "Lorem ipsum dolor sit amet, consec adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
        }
      ]
    };
  }
};
</script>
