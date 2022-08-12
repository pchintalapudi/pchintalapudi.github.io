<template>
  <article class="stat">
    <h3 class="number">{{ number }}</h3>
    <h4 class="name"><p class="inline-number" aria-hidden="true">{{ number }}</p>&nbsp;{{ name }}</h4>
    <p class="subtext">{{ subtext }}</p>
  </article>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    name: String,
    number: Number,
    subtext: String
  }
});
</script>
<style scoped>
.number {
  border-radius: 50%;
  font-size: 2.75em;
  width: 2em;
  height: 2em;
  justify-content: center;
  align-items: center;
  color: rgb(var(--fg-color));
  transition: color 300ms;
  position: relative;
}
.backing {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(var(--bg-color));
  transition: background-color 300ms;
  overflow: hidden;
  border-radius: 50%;
}
.arc>* {
  position: absolute;
  height: 50%;
  width: 50%;
  top: 50%;
  left: 50%;
  background-color: rgb(var(--fg-color));
  transition: background-color 300ms;
}
.name {
  display: inline-block;
}
.stat {
  align-items: center;
  padding: 20px;
  text-align: center;
}
.inline-number {
  font-size: 0;
  opacity: 0;
  display: inline;
}
@media (max-width: 1000px) {
  .number {
    font-size: 3em;
  }
}
@media (max-width: 800px) {
  .number {
    font-size: 2em;
  }
}
@media (max-width: 700px) {
  .stat {
    display: inline;
    padding: 0;
  }
  .name {
    display: inline;
    font-weight: normal;
    color: var(--text-color);
    transition: color 300ms;
    font-family: "Montserrat", sans-serif;
    font-size: 1em;
  }
  .number {
    display: none;
  }
  .inline-number {
    font-size: 1em;
    opacity: 1;
  }
  .subtext {
    display: none;
  }
}
</style>