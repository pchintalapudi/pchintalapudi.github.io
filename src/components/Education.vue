<template>
  <article id="education">
    <icon-vue :color="'green'" :icon="'school'"></icon-vue>
    <h2 class="title">Education and Coursework</h2>
    <h3 class="school">Massachusetts Institute of Technology</h3>
    <h4 class="degree">Masters of Engineering in <mark class="red">Electrical Engineering and Computer Science</mark></h4>
    <h4 class="degree">
      Bachelor of Science in
      <mark class="red">Computer Science Engineering</mark> and
      <mark class="green">Bioengineering</mark>
    </h4>
    <section class="courses">
      <article
        v-for="(cls, idx) in classes"
        :key="cls.id"
        :id="cls.id"
        :class="[...cls.tags, 'class', idx < 5 ? '' : idx < 10 ? 'top10' : idx < 20 ? 'top20' : 'all']"
      >
        <h5>{{ cls.name }}</h5>
        <i>{{ cls.id }}</i>
      </article>
    </section>
  </article>
</template>
<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import IconVue from "./Icon.vue";

export default defineComponent({
  components: {
    IconVue,
  },
  computed: {
    classes() {
      return useStore().state.courses;
    },
  },
});
</script>
<style scoped>
#education {
  align-items: center;
  text-align: center;
  padding: 20px 0;
}
h2, h3 {
  padding: 0.5em;
}
h4 {
  padding: 0.25em;
}
mark {
  display: inline;
  background-color: transparent;
  transition: color 300ms;
  color: var(--color);
}
.degree {
  display: inline-block;
}
.icon {
  font-size: 10em;
}
.courses {
  padding: 20px 5vw;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  align-self: stretch;
  column-gap: 10px;
  row-gap: 10px;
}
.class {
  text-align: center;
  transition: background-color 300ms;
  padding: 10px;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(var(--fg-color), 0.1);
}
/* .cs {
  background-color: rgba(var(--red), 0.1);
}
.bio {
  background-color: rgba(var(--green), 0.1);
}
.cs.bio {
  background-color: rgba(var(--yellow), 0.1);
} */

@media (max-width: 1000px) {
  .class.all {
    display: none;
  }
}
@media (max-width: 800px) {
  .class.top20 {
    display: none;
  }
}
@media (max-width: 600px) {
  .class.top10 {
    display: none;
  }
}
</style>