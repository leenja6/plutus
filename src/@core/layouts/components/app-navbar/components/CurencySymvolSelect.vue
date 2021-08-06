<template>
  <ul class="balance-сurrency">
    <b-nav-item-dropdown
      id="dropdown-content"
      variant="link"
      class=""
      right
    >
      <template #button-content>
        <p
          class="balance-dropdown"
        >
          {{ curency }}
        </p>
      </template>

      <b-dropdown-item
        v-for="items in curencyArr"
        :key="items.title"
        @click="toggleBox(items.title)"
      >
        <span><img :src="require(`@/assets/images/icons/${items.img}.svg`)"><img :src="require(`@/assets/images/icons/${items.img}withe.svg`)"><img :src="require(`@/assets/images/icons/${items.img}hover.svg`)"></span><span>{{ items.title }}</span>
      </b-dropdown-item>

    </b-nav-item-dropdown>
  </ul>
</template>
<script>
import { computed } from '@vue/composition-api'
import { BNavItemDropdown, BDropdownItem } from 'bootstrap-vue'
import store from '@/store'

export default {
  components: { BNavItemDropdown, BDropdownItem },
  setup() {
    const curency = computed(() => store.state.appNavbar.curency)
    const curencyArr = [
      {
        title: 'USD',
        img: 'iconusd',
      },
      {
        title: 'EUR',
        img: 'iconeuro',
      },
      {
        title: 'RUB',
        img: 'iconrub',
      },
    ]

    function toggleBox(item) {
      store.commit('appNavbar/updateCurency', item)
    }
    return {
      toggleBox, curency, curencyArr,
    }
  },
}
</script>
