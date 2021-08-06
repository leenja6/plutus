<template>
  <div v-click-outside="hide" class="select-amount">
    <div
      @click="SelectTotal"
    >

      <p
        class="select-amount-сurrency"
      >
        {{ totalitem }} <i><svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="vs__open-indicator"
          role="presentation"
        ><polyline points="6 9 12 15 18 9" /></svg></i>
      </p></div>
    <ul
      v-if="selecttotal"
      class="select-amount-сurrency-items"
    >
      <li
        v-for="items in curencyarray"
        :key="items.title"
        @click="toggleBoxTotal(items.title)"
      ><span><img :src="require(`@/assets/images/icons/${items.img}.svg`)"><img :src="require(`@/assets/images/icons/${items.img}withe.svg`)"><img :src="require(`@/assets/images/icons/${items.img}hover.svg`)"></span><span>{{ items.title }}</span></li>
    </ul>
  </div>
</template>
<script>
import {
  ref,
} from '@vue/composition-api'
import ClickOutside from 'vue-click-outside'

export default {
  emits: ['selectcurency'],
  directives: {
    ClickOutside,
  },
  props: ['curencyarray', 'curencydefault'],
  setup(props, { emit }) {
    const totalitem = ref(props.curencydefault)
    const selecttotal = ref(false)

    function SelectTotal() {
      selecttotal.value = !selecttotal.value
    }

    function toggleBoxTotal(item) {
      totalitem.value = item
      selecttotal.value = false
      emit('selectcurency', item)
    }

    function hide() {
      selecttotal.value = false
    }

    return {
      selecttotal, totalitem, SelectTotal, toggleBoxTotal, hide,
    }
  },
}
</script>
