<template>
  <div class="navbar-container d-flex content align-items-center">

    <!-- Nav Menu Toggler -->
    <ul class="nav navbar-nav d-xl-none">
      <li class="nav-item">
        <b-link
          class="nav-link"
          @click="toggleVerticalMenuActive"
        >
          <feather-icon
            icon="MenuIcon"
            size="21"
          />
        </b-link>
      </li>
    </ul>

    <!-- Left Col -->
    <div class="bookmark-wrapper align-items-center flex-grow-1 d-none d-lg-flex">
      <p class="balance-text">
        Мой баланс
      </p>
      <curency-symvol-select />
      <app-select-cost />
    </div>

    <b-navbar-nav class="nav align-items-center ml-auto">
      <locale />
      <help-box />
      <dark-Toggler class="d-none d-lg-block" />
      <notification-dropdown />
      <b-nav-item-dropdown
        right
        toggle-class="d-flex align-items-center dropdown-user-link"
        class="dropdown-user"
      >
        <template #button-content>
          <div class="d-sm-flex d-none user-nav">
            <p class="user-name font-weight-bolder mb-0">
              ivan-nikitin
            </p>
            <span class="user-status">Профиль</span>
          </div>
          <b-avatar
            size="40"
            variant="light-primary"
            badge
            :src="require('@/assets/images/avatars/13-small.png')"
            class="badge-minimal"
            badge-variant="success"
          />
        </template>

        <b-dropdown-item
          to="/settings"
          link-class="d-flex align-items-center"
        >

          <feather-icon
            size="16"
            icon="SettingsIcon"
            class="mr-50"
          />
          <span>Настройки</span>

        </b-dropdown-item>

        <b-dropdown-item
          to="/logs"
          link-class="d-flex align-items-center"
        >

          <feather-icon
            size="16"
            icon="ListIcon"
            class="mr-50"
          />
          <span>Логи</span>
        </b-dropdown-item>

        <b-dropdown-item link-class="d-flex align-items-center">
          <feather-icon
            size="16"
            icon="LogOutIcon"
            class="mr-50"
          />
          <span>Выход</span>
        </b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>
  </div>
</template>

<script>
import {
  BLink, BNavbarNav, BNavItemDropdown, BDropdownItem, BAvatar,
} from 'bootstrap-vue'
import DarkToggler from '@core/layouts/components/app-navbar/components/DarkToggler.vue'
import CurencySymvolSelect from '../../@core/layouts/components/app-navbar/components/CurencySymvolSelect.vue'
import HelpBox from '../../@core/layouts/components/app-navbar/components/HelpBox.vue'
import Locale from '../../@core/layouts/components/app-navbar/components/Locale.vue'
import NotificationDropdown from '../../@core/layouts/components/app-navbar/components/NotificationDropdown.vue'
import AppSelectCost from '../../components/ui/AppSelectCost.vue'

export default {

  components: {
    BLink,
    BNavbarNav,
    BNavItemDropdown,
    BDropdownItem,
    CurencySymvolSelect,
    BAvatar,
    Locale,
    NotificationDropdown,
    HelpBox,
    AppSelectCost,

    // Navbar Components
    DarkToggler,
  },
  props: {
    toggleVerticalMenuActive: {
      type: Function,
      default: () => {},
    },
  },
}
</script>
