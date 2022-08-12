<template>
  <article id="projects">
    <icon-vue :color="'blue'" :icon="'devices'"></icon-vue>
    <section class="body">
      <section>
        <h2 class="header">Personal Projects</h2>
        <section class="projects">
          <article
            v-for="project in projects"
            :key="project.id"
            :class="[...project.tags, 'project']"
            :id="project.id"
          >
            <h3>{{ project.name }}</h3>
            <span class="metadata">
              <i
                >{{ dateFromString(project.start) }} to
                {{ dateFromString(project.end) }}</i
              >
            </span>
            <p class="description" v-html="markdown(project.description)"></p>
            <a :href="project.github" v-if="project.github" class="link">GitHub Project</a>
            <a :href="project.link" v-if="project.link" class="link">Live Demo</a>
          </article>
        </section>
      </section>
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
    projects() {
      return useStore().state.projects;
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
#projects {
  padding: 20px;
  align-items: center;
  padding: 20px 5vw;
}
.icon {
  font-size: 10em;
}
.body {
  flex-flow: row wrap;
}
.body > * {
  padding: 5px;
}
.projects {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  column-gap: 40px;
  row-gap: 40px;
}
.project {
  padding: 10px;
  transition: background-color 300ms;
  border-radius: 10px;
}
.project > p, .metadata {
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
.link {
  align-self: flex-start;
}
@media (max-width: 800px) {
}
@media (max-width: 600px) {
  .projects {
    grid-template-columns: 1fr;
  }
}
</style>
