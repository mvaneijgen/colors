<template>
  <colors :amount="amount" />
</template>

<script>
import colors from "@/components/ui/colors.vue";

export default {
  components: {
    colors,
  },
  data() {
    return {
      amount: 1024,
    };
  },
  created() {
    this.$store.dispatch("Colors/SET_COLOR_AMOUNT", this.amount);
  },
};
</script>


