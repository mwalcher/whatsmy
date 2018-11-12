<template>
    <main class="faq">
        <div class="container">
            <Sidebar
                :navigation="sections"
                :activeSection="activeSection"
                @setActive="setActive"
            >
                <template slot="mobile-hero">
                    <SimpleHero
                        titleTop="Frequently"
                        titleBottom="Asked Questions"
                    />
                </template>

                <div class="desktop-hero">
                    <SimpleHero
                        title="Frequently Asked Questions"
                    />
                </div>

                <AccordionList
                    v-for="(section, index) in sections"
                    :key="index"
                    :id="section.anchor"
                    :title="section.title"
                    :accordions="section.accordions"
                    :class="{active : activeSection === section.anchor}"
                    class="sidebar-section"
                />
            </Sidebar>
        </div>
    </main>
</template>

<script>
import Sidebar from "@/components/layout/Sidebar.vue";
import SimpleHero from "@/components/common/SimpleHero.vue";
import AccordionList from "@/components/faq/AccordionList.vue";

export default {
  name: "faq",
  components: {
    Sidebar,
    SimpleHero,
    AccordionList
  },
  data() {
    return {
      activeSection: "section1",
      sections: [
        {
          anchor: "section1",
          title: "Section 1",
          accordions: [
            {
              title:
                "Does Nike's new Making app place sustainability at the forefront of design?",
              body: [
                "Nike is a company for whom performance is everything. The company employs 38,000 people globally and last year posted revenues of over $24bn. At the London Olympics, 58 gold medalists were wearing Nike branded garments; their achievements epitomised the standards to which the company aspires in all facets of its operation."
              ]
            },
            {
              title:
                "Does Nike's new Making app place sustainability at the forefront of design?",
              body: [
                "Nike is a company for whom performance is everything. The company employs 38,000 people globally and last year posted revenues of over $24bn. At the London Olympics, 58 gold medalists were wearing Nike branded garments; their achievements epitomised the standards to which the company aspires in all facets of its operation.",
                "This month in London, Nike launched its Making app, a digital tool that shares some of the data the company uses when considering the environmental impact of the materials used in apparel and footwear design. The app provides a mark out of 50 for the 22 materials most commonly used by its designers, using information that is drawn from the Materials Sustainability Index (MSI) that it has developed over the past seven years."
              ]
            }
          ]
        },
        {
          anchor: "section2",
          title: "Section 2",
          accordions: [
            {
              title:
                "Does Nike's new Making app place sustainability at the forefront of design?",
              body: [
                "Nike is a company for whom performance is everything. The company employs 38,000 people globally and last year posted revenues of over $24bn. At the London Olympics, 58 gold medalists were wearing Nike branded garments; their achievements epitomised the standards to which the company aspires in all facets of its operation."
              ]
            },
            {
              title:
                "Does Nike's new Making app place sustainability at the forefront of design?",
              body: [
                "Nike is a company for whom performance is everything. The company employs 38,000 people globally and last year posted revenues of over $24bn. At the London Olympics, 58 gold medalists were wearing Nike branded garments; their achievements epitomised the standards to which the company aspires in all facets of its operation.",
                "This month in London, Nike launched its Making app, a digital tool that shares some of the data the company uses when considering the environmental impact of the materials used in apparel and footwear design. The app provides a mark out of 50 for the 22 materials most commonly used by its designers, using information that is drawn from the Materials Sustainability Index (MSI) that it has developed over the past seven years."
              ]
            }
          ]
        },
        {
          anchor: "section3",
          title: "Section 3",
          accordions: [
            {
              title:
                "Does Nike's new Making app place sustainability at the forefront of design?",
              body: [
                "Nike is a company for whom performance is everything. The company employs 38,000 people globally and last year posted revenues of over $24bn. At the London Olympics, 58 gold medalists were wearing Nike branded garments; their achievements epitomised the standards to which the company aspires in all facets of its operation."
              ]
            },
            {
              title:
                "Does Nike's new Making app place sustainability at the forefront of design?",
              body: [
                "Nike is a company for whom performance is everything. The company employs 38,000 people globally and last year posted revenues of over $24bn. At the London Olympics, 58 gold medalists were wearing Nike branded garments; their achievements epitomised the standards to which the company aspires in all facets of its operation.",
                "This month in London, Nike launched its Making app, a digital tool that shares some of the data the company uses when considering the environmental impact of the materials used in apparel and footwear design. The app provides a mark out of 50 for the 22 materials most commonly used by its designers, using information that is drawn from the Materials Sustainability Index (MSI) that it has developed over the past seven years."
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    setActive: function(id) {
      this.activeSection = id;
    },
    getTopPosition: function(section) {
      const sectionPosition = section.getBoundingClientRect();
      const header = document.querySelector("header");
      const sectionTop = sectionPosition.top - header.offsetHeight - 51;

      return Math.round(sectionTop);
    },
    setActiveNavigation: function() {
      if (window.innerWidth >= 768) {
        const sections = document.querySelectorAll(".sidebar-section");
        let triggerPoint = 0;
        let activeID = this.activeSection;

        sections.forEach((section, index) => {
          let sectionTop = this.getTopPosition(section);

          if (sectionTop <= triggerPoint) {
            if (index !== sections.length - 1) {
              let nextSectionTop = this.getTopPosition(sections[index + 1]);

              if (nextSectionTop < 0) {
                return;
              }
            }

            activeID = section.id;
          }
        });

        this.setActive(activeID);
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.setActiveNavigation);
  },
  destroyed() {
    window.removeEventListener("scroll", this.setActiveNavigation);
  }
};
</script>
