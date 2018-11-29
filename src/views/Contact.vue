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
                    :class="{imageFixed, imageBottom}"
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
  },
  data() {
    return {
      imageFixed: false,
      imageBottom: false
    };
  },
  methods: {
    fixedImage: function() {
      const page = document.querySelector(".page-content");
      const heroImage = document.querySelector(".simple-hero .image-container");
      const header = document.querySelector("header");
      const offset = header.offsetHeight;

      const pagePosition = page.getBoundingClientRect();
      const pageTop = pagePosition.top - (offset + 60);
      const pageBottom = pagePosition.bottom - (offset + 100);
      const heroImageHeight = heroImage.offsetHeight;

      if (pageTop <= 0 && pageBottom >= heroImageHeight) {
        this.imageBottom = false;
        this.imageFixed = true;
      } else if (pageTop <= 0 && pageBottom < heroImageHeight) {
        this.imageFixed = false;
        this.imageBottom = true;
      } else {
        this.imageFixed = false;
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.fixedImage);
  },
  destroyed() {
    window.removeEventListener("scroll", this.fixedImage);
  }
};
</script>
