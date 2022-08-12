<template>
  <article id="work">
    <icon-vue :color="'yellow'" :icon="'science'"></icon-vue>
    <h2 class="header">Work Experience</h2>
    <section class="experiences">
      <article
        v-for="exp in experiences"
        :key="exp.id"
        :class="[...exp.tags, 'work']"
        :id="exp.id"
      >
        <h3>{{ exp.company }}</h3>
        <span class="metadata">
          <h4>{{ exp.role }}</h4>
          <i v-if="exp.start != exp.end"
            >{{ dateFromString(exp.start) }} to
            {{ dateFromString(exp.end) }}</i
          >
          <i v-else>{{ dateFromString(exp.start) }}</i>
        </span>
        <p
          class="description"
          v-html="markdown(exp.description)"
        ></p>
      </article>
    </section>
  </article>
</template>
<script lang="ts">
import { useStore } from "@/store";
import { defineComponent } from "vue";
import IconVue from "./Icon.vue";
import { marked } from "marked";

export default defineComponent({
  components: {
    IconVue,
  },
  computed: {
    experiences() {
      return useStore().state.work;
    },
  },
  methods: {
    dateFromString(date: string | null) {
      if (date === null) {
        return "Present";
      }
      const [month, year] = date.split("-");
      return (
        new Date(new Date().getFullYear(), +month - 1).toLocaleString(
          "default",
          { month: "long" }
        ) +
        " " +
        year
      );
    },
    markdown(raw: string) {
      return marked(raw);
    },
  },
});
</script>
<style scoped>
#work {
  padding: 20px;
  align-items: center;
  padding: 20px 5vw;
}
.icon {
  font-size: 10em;
}
.experiences {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  column-gap: 40px;
  row-gap: 40px;
}
.work {
  padding: 10px;
  transition: background-color 300ms;
  border-radius: 10px;
}
.work > p, .metadata {
  padding: 10px 0;
}
.metadata > i {
  padding-top: 10px;
}
.header {
  text-align: center;
  padding: 40px;
}
.description :deep(*) {
  display: inline-block;
}
@media (max-width: 800px) {
}
@media (max-width: 600px) {
  .experiences {
    grid-template-columns: 1fr;
  }
}
</style>
