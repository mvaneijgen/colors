<template>
  <li :style="{ backgroundColor: '#' + color, color: contrast(color)}" :data-color="color">
    <div class="inner">
      <span class="hex">{{ color }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: ["color"],
  name: "colorSingle",
  methods: {
    contrast(hexcolor) {
      // If a leading # is provided, remove it
      if (hexcolor.slice(0, 1) === "#") {
        hexcolor = hexcolor.slice(1);
      }

      // If a three-character hexcode, make six-character
      if (hexcolor.length === 3) {
        hexcolor = hexcolor
          .split("")
          .map(function(hex) {
            return hex + hex;
          })
          .join("");
      }

      // Convert to RGB value
      var r = parseInt(hexcolor.substr(0, 2), 16);
      var g = parseInt(hexcolor.substr(2, 2), 16);
      var b = parseInt(hexcolor.substr(4, 2), 16);

      // Get YIQ ratio
      var yiq = (r * 299 + g * 587 + b * 114) / 1000;

      // Check contrast Defautl 128
      return yiq >= 150 ? "black" : "white";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

li {
  display: block;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  // text-shadow: 1px 1px 0 $brand-light;
  transition: transform;
  transition-duration: 300ms;
  transition-timing-function: ease;

  &::before {
    content: "";
    padding-bottom: 100%;
    display: inline-block;
    vertical-align: top;
  }
  &:hover {
    transform: scale(1.1);
    .hex {
      opacity: 1;
    }
  }
  .hex {
    font-size: 18px;
    font-weight: 900;
    opacity: 0;
    text-transform: lowercase;
    &::before {
      content: "#";
      font-weight: 400;
      font-size: 0.9em;
      margin-right: 1px;
    }
  }
}
</style>
