<template>
  <div id="navigation-main">
    <div class="logo">
      <nuxt-link to="/">
        <span>4.096</span>
        <span>Colors</span>
      </nuxt-link>
    </div>

    <div class="intro small" v-html="$store.state.Default.description"></div>
    <div class="profile small">
      <div class="avatar">
        <img :src="me.avatar" alt="">
      </div>
      <h4 class="alloy-title">{{me.name}}</h4>
      <p class="small">{{me.tagline}}</p>
      <a :href="me.url">{{me.url}}</a>
      <ul class="social">
        <li v-for="(item, index) in me.social" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {
    // SlideNav,
  },
  data() {
    return {
      me: this.$store.state.Default.me,
    };
  },
  computed: {
    getNavigationToggle() {
      return this.$store.getters["ui/getNavigationToggle"];
    },
  },
  methods: {
    updateNavigationToggle() {
      this.$store.commit("ui/updateNavigationToggle");
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.logo {
  text-align: center;
  margin-bottom: $base-margin * 2;
  a {
    text-decoration: none;
    color: $brand-dark;
    font-weight: 400;
  }
  span {
    display: block;
    text-transform: uppercase;
    &:first-of-type {
      // @include responsive-font(5vw, 35px, 150px, 50px);
      font-size: 62px;
      font-weight: 900;
    }
    &:last-of-type {
      font-size: 18px;
      font-weight: 900;
    }
    span {
    }
  }
}
</style>
