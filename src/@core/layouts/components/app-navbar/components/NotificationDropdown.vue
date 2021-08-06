<template>
  <b-nav-item-dropdown
    class="dropdown-notification mr-25 "
    menu-class="dropdown-menu-media"
    right
  >
    <template #button-content>
      <feather-icon
        :badge="notifications.length"
        badge-classes="bg-danger"
        class="text-body"
        icon="BellIcon"
        size="21"
      />
    </template>

    <!-- Header -->
    <li class="dropdown-menu-header">
      <div class="dropdown-header d-flex">
        <h4 class="notification-title mb-0 mr-auto">
          Уведомления
        </h4>
        <b-badge
          pill
          variant="light-primary"
        >
          {{ notifications.length }} Новых
        </b-badge>
      </div>
    </li>

    <!-- Notifications -->
    <vue-perfect-scrollbar
      v-once
      :settings="perfectScrollbarSettings"
      class="scrollable-container media-list scroll-area"
      tagname="li"
    >
      <!-- Account Notification -->

      <b-media
        v-for="notification in notifications"
        :key="notification.subtitle"
      >
        <template #aside />
        <div class="media-one-box">
          <p class="media-heading">
            <span class="font-weight-bolder">
              {{ notification.title }}
            </span>
          </p>
          <small class="notification-text">{{ notification.subtitle }}</small>
        </div>
        <div
          v-if="notification.btn_title"
          class="media-two-box"
        >
          <a
            class="btn-notification"
            href="#"
          >{{ notification.btn_title }}</a>
        </div>
      </b-media>

    </vue-perfect-scrollbar>

    <!-- Cart Footer -->
    <li class="dropdown-menu-footer"><b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      block
    >Отметить все как прочитанные</b-button>
    </li>
  </b-nav-item-dropdown>
</template>

<script>
import {
  BNavItemDropdown, BBadge, BMedia, BButton,
} from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BNavItemDropdown,
    BBadge,
    BMedia,
    VuePerfectScrollbar,
    BButton,

  },
  directives: {
    Ripple,
  },
  setup() {
    /* eslint-disable global-require */
    const notifications = [
      {
        title: 'Баланс рублевого счета пополнен 💰',
        subtitle: '14-05-2021 01:12',
        type: 'light-success',
        btn_title: 'История',
      },
      {
        title: 'Пароль дотсупа в систему изменен 👌',
        subtitle: '14-05-2021 00:49:31',
        type: 'light-info',
        btn_title: 'Логи',
      },
    ]

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false,
    }

    return {
      notifications,
      perfectScrollbarSettings,
    }
  },
}
</script>

<style>

</style>
