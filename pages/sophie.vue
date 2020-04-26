<template>
  <keep-alive>
    <colors :amount="amount" />
  </keep-alive>
</template>

<script>
import colors from "@/components/ui/colors.vue";

export default {
  components: {
    colors,
  },
  data() {
    return {
      amount: 1536,
    };
  },
  created() {
    this.$store.dispatch("Colors/SET_COLOR_AMOUNT", this.amount);
  },
};
</script>


