<template>
    <main class="contact">
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
    </main>
</template>

<script>
import SimpleHero from "@/components/common/SimpleHero.vue";
import ContactForm from "@/components/contact/ContactForm.vue";

export default {
  name: "contact",
  components: {
    SimpleHero,
    ContactForm
  }
};
</script>
