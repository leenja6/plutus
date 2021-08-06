<template>
  <b-nav-item-dropdown
    id="dropdown-grouped"
    variant="link"
    class="dropdown-language select-language"
    right
  >
    <template #button-content>
      <b-img
        :src="currentLocale.img"
        height="20px"
        width="32px"
        :alt="currentLocale.locale"
      />
      <span class="ml-50 text-body">{{ currentLocale.name }}</span>
    </template>
    <b-dropdown-item
      v-for="localeObj in locales"
      :key="localeObj.locale"
      @click="addLocale(localeObj.locale)"
    >
      <b-img
        :src="localeObj.img"
        height="20px"
        width="32px"
        :alt="localeObj.locale"
      />

      <span
        class="ml-50"
        :class="localeObj.locale === count ? 'active' : ''"
      >{{ localeObj.name }}</span>
    </b-dropdown-item>
  </b-nav-item-dropdown>
</template>

<script>
import { BNavItemDropdown, BDropdownItem, BImg } from 'bootstrap-vue'

export default {
  components: {
    BNavItemDropdown,
    BDropdownItem,
    BImg,
  },

  data() {
    return {
      count: this.$i18n.locale,
    }
  },

  // ! Need to move this computed property to comp function once we get to Vue 3
  computed: {
    currentLocale() {
      return this.locales.find(l => l.locale === this.$i18n.locale)
    },
  },
  methods: {
    addLocale(item) {
      this.$i18n.locale = item
      this.count = this.$i18n.locale
    },
  },
  setup() {
    /* eslint-disable global-require */
    const locales = [

      {
        locale: 'ru',
        img: require('@/assets/images/icons/rus.svg'),
        name: 'Русский',
      },
      {
        locale: 'en',
        img: require('@/assets/images/flags/en.png'),
        name: 'English',
      },
      {
        locale: 'ch',
        img: require('@/assets/images/flags/chinese.svg'),
        name: 'Chinese',
      },
    ]
    /* eslint-disable global-require */

    return {
      locales,
    }
  },
}
</script>

<style>

</style>
