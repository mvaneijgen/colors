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
      amount: 4096,
    };
  },
  created() {
    this.$store.dispatch("Colors/SET_COLOR_AMOUNT", this.amount);
    console.warn(this.$store.state.Colors.currentAmount);
  },
};
</script>


