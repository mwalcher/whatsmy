<template>
    <main class="faq">
        <SimpleHero
            title="Frequently Asked Questions"
        />
        <AccordionList
            v-for="(section, index) in sections"
            :key="index"
            :title="section.title"
            :accordions="section.accordions"
        />
    </main>
</template>

<script>
import SimpleHero from "@/components/common/SimpleHero.vue";
import AccordionList from "@/components/faq/AccordionList.vue";

export default {
  name: "faq",
  components: {
    SimpleHero,
    AccordionList
  },
  data() {
    return {
      sections: [
        {
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
  }
};
</script>
