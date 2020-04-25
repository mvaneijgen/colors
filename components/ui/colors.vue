


<template>
  <div class="component-colors" id="colors">
    <ul id="colors-list">
      <colorSingle v-for="(color) in colors" :key="color" :color="color" />
    </ul>
    <button v-if="$store.state.Colors.colorsMore" @click="loadMore">Load more colors</button>
  </div>
</template>

<script>
import colorSingle from "@/components/ui/colorSingle.vue";

export default {
  name: "colors",
  components: {
    colorSingle,
  },
  data() {
    return {
      colors: [],
    };
  },
  computed: {
    getColors() {
      return this.$store.getters["Colors/getColors"];
    },
  }, // Data with computed logic
  methods: {
    loadMore() {
      this.colors = [...this.colors, ...this.getColors];
      this.$store.dispatch("Colors/COLOR_COUNT");
    },
  },
  created() {},
  mounted() {
    this.loadMore();
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

#colors-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  // grid-template-columns: repeat(auto-fill, minmax(12.5%, 1fr));
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(auto-fill, minmax(6.25%, 1fr));
  }
  // grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
}
</style>