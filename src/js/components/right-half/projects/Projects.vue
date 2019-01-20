<template>
  <div class="projects">
    <VerticalCentered padding="8% 0">
      <div class="projects-blk">
        <h1>Projects</h1>
        <Project :name="scribble.name" :link="scribble.link" :description="scribble.description" :images="scribble.images" :note="scribble.note" />
        <Project :name="vueLiteralCompiler.name" :link="vueLiteralCompiler.link" :description="vueLiteralCompiler.description" />
        <Project :name="vuexClassComponent.name" :link="vuexClassComponent.link" :description="vuexClassComponent.description" />
        <Project :name="vuexClassModule.name" :link="vuexClassModule.link" :description="vuexClassModule.description" />
        <Project :name="portfolio.name" :link="portfolio.link" :description="portfolio.description" />
        <Project :name="socialShowcase.name" :link="socialShowcase.link" :description="socialShowcase.description" />
        <Project :name="rhomme.name" :link="rhomme.link" :description="rhomme.description" :images="rhomme.images" :note="rhomme.note" />
      </div>
    </VerticalCentered>
  </div>
</template>


<script>
  import VerticalCentered from "../../../../js/libs/m-ui/layout/VerticalCentered.vue";
  import Project from "./Project.vue";

  export default {
    data() {
      return {
        scribble: {
          name: "Scribble",
          link: "https://michaelolof-scribble.herokuapp.com",
          description: "A simple and beautiful desktop note taking experience without all the fuss.",
          images: ["scribble/scribble-1.png", "scribble/scribble-2.png", "scribble/scribble-3.png"],
          note: "Scribble was built to be intuitive. We don't want you watching youtube videos, bothering with online tutorials just so you can be productive with Scribble. Finally an app that does what it says it does. We understand that your data is valuable (lol). Download the Scibble Desktop App and continually stay updated with the latest changes, new feautures, upgrades and so on all with the click of a button."
        },
        vueLiteralCompiler: {
          name: "Vue Literal Compiler",
          link: "https://github.com/michaelolof/vue-literal-compiler",
          description: "A Vue Compiler that allows you compile your string literals to render functions at build time and write components in SFC paradigm",
        },
        vuexClassComponent: {
          name: "Vuex Class Component",
          link: "https://github.com/michaelolof/vuex-class-component",
          description: "A Type Safe Vuex Module or Store Using ES6 Classes and ES7 Decorators written in TypeScript.",
        },
        vuexClassModule: {
          name: "Vuex Class Module",
          link: "https://github.com/michaelolof/vuex-class-module",
          description: "A simple class that utilizes ES7 decorators to provide syntactic sugar which enables you to declare Vuex Modules using ES6 classes.",
        },
        portfolio: {
          name: "My Portfolio",
          description: "Yup!. This is not a template.",
          link: "https://www.michaelolof.github.io",
        },
        socialShowcase: {
          name: "Social ShowCase",
          link: "https://www.michaelolof.github.io/docs/social-showcase/index.html",
          description: "Simple social web page outlining the use of some intricate UI components.",
        },
        rhomme: {
          name: "Rhomme",
          link: "https://rhomme-179921.appspot.com ",
          images: ["rhomme/rhomme-1.png", "rhomme/rhomme-2.png", "rhomme/rhomme-3.png", "rhomme/rhomme-4.png", "rhomme/rhomme-5.png", "rhomme/rhomme-6.png"],
          description: "A full-fledged e-commerce platform where buyers can sellers their products/services to prospective buyers for free.",
          note: "A full-fledged e-commerce platform where buyers can sellers their products/services to prospective buyers for free built with Laravel php and jQuery JavaScript",
        },

      };
    },
    components: {
      VerticalCentered,
      Project,
    }
  }
</script>


<style scoped>
  .projects {
    width: 100%;
    height: 100%;
  }

  .projects-blk {
    width: 90%;
    margin: 0 auto;
  }
</style>