<template>
    <Page pageClass="contact">
        <div class="container">
            <div class="page-content">
                <SimpleHero
                    title="Got a message to deliver?"
                    content="You’ve come to the right place."
                    buttonLink="/"
                    buttonText="Get Started"
                    buttonTitle="Get Started"
                    imageSrc="birds.png"
                    imageAlt="Birds Hero Image"
                />
                <ContactForm/>
            </div>
        </div>
    </Page>
</template>

<script>
import Page from "@/components/layout/Page.vue";
import SimpleHero from "@/components/common/SimpleHero.vue";
import ContactForm from "@/components/contact/ContactForm.vue";

export default {
  name: "contact",
  components: {
    Page,
    SimpleHero,
    ContactForm
  }
};
</script>
