<template>
  <div id="navigation-main">
    <div class="logo">
      <nuxt-link to="/">
        <span>{{animatedNumber}}</span>
        <span>Colors</span>
      </nuxt-link>
    </div>
    <nuxt-link to="/">Start</nuxt-link>
    <nuxt-link to="/all">All colors</nuxt-link>
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
// import { gsap } from "gsap";
import { TweenMax, TimelineMax } from "gsap";

export default {
  name: "Navigation",
  components: {
    // SlideNav,
  },
  data() {
    return {
      me: this.$store.state.Default.me,
      tweenedNumber: 0,
      // currentAmount: this.$store.state.Colors.currentAmount,
    };
  },
  computed: {
    getCurrentAmount() {
      return this.$store.getters["Colors/getCurrentAmount"];
    },
    // Animate the number 💯 using GSAP
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    },
  },
  methods: {
    updateNavigationToggle() {
      this.$store.commit("ui/updateNavigationToggle");
    },
    animate(newValue) {
      TweenMax.to(this.$data, 0.5, { tweenedNumber: newValue });
    },
  },
  mounted() {
    this.animate;
  },
  watch: {
    getCurrentAmount: {
      immediate: true,
      handler(newValue, oldValue) {
        immediate: true, this.animate(newValue);
      },
    },
    test: {
      immediate: true,
      handler(newVal, oldVal) {
        console.log(newVal, oldVal);
      },
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
