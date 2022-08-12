<template>
  <p :class="['icon', color]">{{icon}}</p>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    color: String,
    icon: String
  },
});
</script>
<style scoped>
.icon {
  color: var(--color);
  transition: color 300ms;
  font-family: 'Material Symbols Outlined';
  font-variation-settings:
  'FILL' 1,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}
</style>