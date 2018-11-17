<template>
    <Page pageClass="privacy">
        <SimpleHero
            title="Privacy Policy"
            content="This Privacy Policy sets out Credsii’s approach to the collection, use and disclosure of personal info in connection with our business in Canada, including but not limited to personal information collected, used and disclosed when you access or use our Website."
        />
        <Section
            v-for="(section, index) in sections"
            :key="index"
            :title="section.title"
            :body="section.body"
        />
    </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import SimpleHero from "@/components/common/SimpleHero.vue";
import Section from "@/components/privacy/Section.vue";

export default {
  name: "privacy",
  components: {
    Page,
    SimpleHero,
    Section
  },
  data() {
    return {
      sections: [
        {
          title: "What this policy covers",
          body: [
            'This Privacy Policy covers how Credsii, Inc. and its affiliated companies (collectively, "Credsii," "we," "us" or "our") collect, share and use information in connection with your access and use of our Services. It does not cover the privacy practices of third parties that we do not own or control.'
          ]
        },
        {
          title: "The information we collect",
          body: [
            "There are three main ways we collect information about you: when you give it to us, with automatic technologies and when we ask others for it."
          ]
        },
        {
          title: "Information you provide us",
          body: [
            "We may ask you to provide certain information to us through various forms, features or other means throughout our Services. These means include, for example, our credit report process, data collection forms for personalized features, and feedback forms where you send us comments, questions or other feedback.",
            "The types of information we may collect from you include your name, address, email address, and phone number. We may also collect information about you or your household, income, assets (such as home or vehicle), and what types of financial products you’re interested in."
          ]
        }
      ]
    };
  }
};
</script>
