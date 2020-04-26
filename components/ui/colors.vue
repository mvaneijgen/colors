


<template>
  <div class="component-colors" id="colors">
    <ul id="colors-list">
      <colorSingle v-for="(color) in getColors" :key="color" :color="color" />
    </ul>
    <button v-if="$store.state.Colors[amount].colorsMore && !loading" @click="loadMore">Load more colors</button>
  </div>
</template>

<script>
import colorSingle from "@/components/ui/colorSingle.vue";

export default {
  props: ["amount"],
  name: "colors",
  components: {
    colorSingle,
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    getColors() {
      return this.$store.getters["Colors/getColors"](this.amount);
    },
  }, // Data with computed logic
  methods: {
    loadMore() {
      // this.colors = [...this.colors, ...this.getColors];
      this.$store.dispatch("Colors/COLOR_COUNT", this.amount);
      this.loading = false;
    },
    //------------------------------------------------------//
    // Infinity scroll
    //------------------------------------------------------//
    itemsinfIniteScroll() {
      window.addEventListener("scroll", () => {
        const docHeight = document.documentElement.offsetHeight;
        const scrollTop = Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop,
        );
        const offset = 200;
        let bottomOfWindow = scrollTop + window.innerHeight >= docHeight;

        if (!this.loading && bottomOfWindow) {
          this.loading = true;
          this.loadMore();
        }
      });
    },
    // END Infinity scroll
  },
  created() {},
  mounted() {
    this.loadMore();
    this.itemsinfIniteScroll();
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
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  @include media-breakpoint-up(lg) {
    grid-template-columns: repeat(auto-fill, minmax(6.25%, 1fr));
  }
}
button {
  width: 100%;
  font-size: 24px;
}
</style>