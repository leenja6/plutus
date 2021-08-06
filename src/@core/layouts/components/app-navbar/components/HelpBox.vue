<template>
  <b-nav-item-dropdown
    class="help-box mr-25"
  >

    <template #button-content>
      <p class="help-box-select">
        <feather-icon
          icon="HelpCircleIcon"
          size="24"
        />
        <span>Помощь</span>
      </p>
    </template>
    <li
      class="help-box-select-items"
    >
      <ul class="balance-dropdown-items сurrency">
        <li><p>
          <router-link to="/faq">
            <span class="help-box-ancor">
              <feather-icon
                icon="InfoIcon"
                class="mr-75"
                size="18"
              />
            </span>
            <span class="help-box-ancor">F. A. Q.</span></router-link></p>
        </li>

        <li><p @click="chatOpen(false)">
          <span class="help-box-ancor">
            <feather-icon
              icon="HeadphonesIcon"
              class="mr-76"
              size="18"
            /></span><span class="help-box-ancor">Поддержка</span></p></li>

      </ul>
    </li>
  </b-nav-item-dropdown>
</template>
<script>
import { BNavItemDropdown } from 'bootstrap-vue'
import store from '@/store'

export default {
  components: { BNavItemDropdown },
  setup() {
    function chatOpen(item) {
      store.commit('viewschats/toggle', item)
    }

    return { chatOpen }
  },
}
</script>
