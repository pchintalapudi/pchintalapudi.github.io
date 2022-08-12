<template>
  <article id="summary">
    <section>
      <a class="linkable" href="#education" style="--linkable-color:var(--red)">
        <icon-vue :color="'red'" :icon="'school'"></icon-vue>
        <h2>Education and Coursework</h2>
      </a>
      <div class="data">
        <numbered-stat
          :name="'Undergraduate Majors'"
          :number="2"
          :subtext="'Computer Science Engineering and Bioengineering'"
        ></numbered-stat>
        <p class="conjunction">and</p>
        <numbered-stat
          :name="'Classes'"
          :number="classes.length"
          :subtext="'Engineering, Science, Math, Design'"
        ></numbered-stat>
      </div>
    </section>
    <section>
      <a class="linkable" href="#work" style="--linkable-color:var(--green)">
        <icon-vue :color="'green'" :icon="'science'"></icon-vue>
        <h2>Internships and Research</h2>
      </a>
      <div class="data">
        <numbered-stat
          :name="'Internships'"
          :number="internships.length"
          :subtext="Array.from(new Set(internships.map(i => i.company))).join(', ')"
        ></numbered-stat>
        <p class="conjunction">and</p>
        <numbered-stat
          :name="'Research Groups'"
          :number="research.length"
          :subtext="Array.from(new Set(research.map(i => i.company))).join(', ')"
        ></numbered-stat>
      </div>
    </section>
    <section>
      <a class="linkable" href="#projects" style="--linkable-color:var(--blue)">
        <icon-vue :color="'blue'" :icon="'devices'"></icon-vue>
        <h2>Skills and Expertise</h2>
      </a>
      <div class="data">
        <numbered-stat
          :name="'Programming Languages'"
          :number="languages.length"
          :subtext="languages.join(', ')"
        ></numbered-stat>
        <p class="conjunction">and</p>
        <numbered-stat
          :name="'Focus Areas'"
          :number="focuses.length"
          :subtext="focuses.join(', ')"
        ></numbered-stat>
      </div>
    </section>
  </article>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import NumberedStat from "./NumberedStat.vue";
import IconVue from "./Icon.vue";
import { useStore } from "@/store";

export default defineComponent({
  components: {
    NumberedStat,
    IconVue
  },
  setup() {},
  computed: {
    internships() {
      return useStore().state.work.filter(w => w.tags.includes('internship') && !w.hidden);
    },
    research() {
      return useStore().state.work.filter(w => w.tags.includes('research') && !w.hidden);
    },
    classes() {
      return useStore().state.courses;
    },
    projects() {
      return useStore().state.projects;
    },
    languages() {
      return ['C++', 'Java', 'Python', 'C', 'Typescript', 'Javascript', 'MATLAB', 'Go', 'Julia', 'Bash']
    },
    focuses() {
      return ['High Performance Standards', 'Robust System Design', 'Intuitive Interfaces']
    }
  }
});
</script>
<style scoped>
#summary {
  justify-content: space-evenly;
  padding: 20px;
  font-size: 1.0625em;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 30px;
  grid-auto-flow: column;
}
#summary > * {
  flex: 1;
  text-align: center;
  align-items: center;
  display: contents;
}
.data {
  display: contents;
}
.icon {
  font-size: 7.5em;
}
.linkable {
  cursor: pointer;
  align-items: center;
}
.linkable > * {
  transition: color 300ms;
}
.dark .linkable:hover > * {
  color: rgb(var(--linkable-color));
}
.unlinkable {
  align-items: center;
}
.conjunction {
  padding: 0.375em;
  display: none;
}
@media (max-width: 1000px) {
  .icon {
    font-size: 6.25em;
  }
}
@media (max-width: 800px) {
  .icon {
    font-size: 6em;
  }
  #summary {
    font-size: 1.125em;
  }
}
@media (max-width: 700px) {
  #summary {
    flex-flow: row wrap;
    display: flex;
  }
  #summary > * {
    display: flex;
  }
  .conjunction {
    display: inline;
  }
  .data {
    display: inline-block;
    padding: 0 20px;
  }
  .icon {
    font-size: 5em;
  }
}
</style>