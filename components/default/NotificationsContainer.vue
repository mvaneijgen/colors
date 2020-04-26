<template>
  <div class="component-NotificationsContainer">
    <transition-group name="slide-in" mode="out-in">
      <Notification v-for="(notification) in getNotifications" :key="notification.id" :notification="notification" />
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Notification from "@/components/default/Notification.vue";

export default {
  // props: ['item'],
  name: "NotificationsContainer",
  components: {
    Notification,
  },
  computed: {
    ...mapGetters({
      getNotifications: "Notifications/getNotifications",
    }),
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/common/_variables.scss";

.component-NotificationsContainer {
  position: fixed;
  right: $base-margin;
  bottom: $base-margin;
  width: 100%;
  z-index: 9000;
  max-width: 300px;
}
</style>