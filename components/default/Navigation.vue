<template>
  <div id="navigation-main">
    <div class="logo">
      <nuxt-link to="/">
        <span>{{animatedNumber}}</span>
        <span>Colors</span>
      </nuxt-link>
    </div>
    <nav id="nav-main">
      <ul>
        <li>
          <nuxt-link to="/">1024 colors</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/all">All 4096 colors</nuxt-link>
        </li>
        <li>
          <nuxt-link disabled to="/palette">Palette</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
      </ul>
    </nav>

    <div class="intro small" v-html="$store.state.Default.description"></div>
    <div class="profile small">
      <div class="avatar">
        <img :src="me.avatar" alt="">
      </div>
      <h4 class="alloy-title"><span>by</span> {{me.name}}</h4>
      <p class="small">{{me.tagline}}</p>

      <ul class="social">
        <li><a :href="me.url">{{me.url}}</a></li>
        <li><a :href="'//reddit.com/u/' + me.social.reddit">/u/{{me.social.reddit}}</a></li>
        <li><a :href="'//twitter.com/' + me.social.twitter">@{{me.social.twitter}}</a></li>
        <li><a :href="'//github.com/' + me.social.github">Github</a></li>
        <li><a :href="'//linkedin.com/in/' + me.social.linkedin">LinkedIn</a></li>
        <li><a :href="'//codepen.com/' + me.social.linkedin">Codepen</a></li>
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
      return this.tweenedNumber
        .toFixed(0)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
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
  margin-bottom: $base-margin;
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
      font-weight: 400;
    }
    span {
    }
  }
}
#nav-main {
  font-size: 24px;
  ul {
    border-bottom: 1px solid;
    border-color: $brand-grey;
  }

  a {
    text-decoration: none;
    display: block;
    border-top: 1px solid;
    border-color: $brand-grey;
    padding: 10px $base-margin;
    @include media-breakpoint-up(lg) {
      padding: 10px $base-margin * 2;
    }
    &:hover {
      background-color: $brand-two;
      color: $brand-light;
    }
  }
}
.avatar {
  // margin: 0 auto;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  overflow: hidden;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}
.alloy-title {
  span {
    font-weight: 400;
  }
}
.social {
  padding: 0;
  margin: 0;
  li {
    display: inline;
    &::after {
      content: " |";
    }
    &:last-of-type {
      &::after {
        content: "";
      }
    }
  }
  a {
    font-weight: 700;
  }
}
</style>
