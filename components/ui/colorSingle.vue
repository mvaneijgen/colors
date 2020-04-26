<template>
  <li :style="{ backgroundColor: '#' + color, color: contrast(color)}" :data-color="color" @click="copy">
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
    copy(event) {
      // window.Clipboard = (function(window, document, navigator) {
      //   var textArea, copy;

      //   function isOS() {
      //     return navigator.userAgent.match(/ipad|iphone/i);
      //   }

      //   function createTextArea(text) {
      //     textArea = document.createElement("textArea");
      //     textArea.value = text;
      //     document.body.appendChild(textArea);
      //   }

      //   function selectText() {
      //     var range, selection;

      //     if (isOS()) {
      //       range = document.createRange();
      //       range.selectNodeContents(textArea);
      //       selection = window.getSelection();
      //       selection.removeAllRanges();
      //       selection.addRange(range);
      //       textArea.setSelectionRange(0, 999999);
      //     } else {
      //       textArea.select();
      //     }
      //   }

      //   function copyToClipboard() {
      //     document.execCommand("copy");
      //     document.body.removeChild(textArea);
      //   }

      //   copy = function(text) {
      //     console.warn(text);
      //     createTextArea(text);
      //     selectText();
      //     copyToClipboard();
      //   };

      //   return {
      //     copy: copy,
      //   };
      // })(window, document, navigator);
      // const copyToClipboard = str => {

      const el = document.createElement("textarea"); // Create a <textarea> element
      el.value = hex; // Set its value to the string that you want copied
      el.setAttribute("readonly", ""); // Make it readonly to be tamper-proof
      el.style.position = "absolute";
      el.style.left = "-9999px"; // Move outside the screen to make it invisible
      document.body.appendChild(el); // Append the <textarea> element to the HTML document
      const selected =
        document.getSelection().rangeCount > 0 // Check if there is any content selected previously
          ? document.getSelection().getRangeAt(0) // Store selection if found
          : false; // Mark as false to know no selection existed before
      el.select(); // Select the <textarea> content
      document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
      document.body.removeChild(el); // Remove the <textarea> element
      if (selected) {
        // If a selection existed before copying
        document.getSelection().removeAllRanges(); // Unselect everything on the HTML document
        document.getSelection().addRange(selected); // Restore the original selection
      }
      // };
      const hex = `#${event.target.dataset.color}`;
      const notification = {
        title: `${hex} copied!`,
        content: "The color is now in your clipboard. Happy coloring! ",
        image: "",
        type: "",
        color: this.contrast(this.color),
        bgColor: hex,
        timer: 6000,
      };
      this.$store.commit("Notifications/addNotification", notification);
    },
    //------------------------------------------------------//
    // Determine if the contrast 🐼 text needs to be black or white
    //------------------------------------------------------//
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
      return yiq >= 128 ? "black" : "white";
    },
  },
  // END Determine if the contrast 🐼 text needs to be black or white -------------------------------------//
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
  * {
    pointer-events: none;
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
