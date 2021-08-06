<template>
  <div
    v-click-outside="hideSystem"
    class="topup-box-dropdown"
  >
    <p
      v-if="carditems.length === 0"
      class="system-title"
      :class="cardvalidate ? 'alert' : ''"
      @click="toggleBoxSystem"
    >
      Выберите карту
      <i><svg
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
    </p>

    <p
      v-for="items in carditems"
      v-else
      :key="items.id"
      class="topup-box-score-title card"
      @click="toggleBoxSystem"
    ><span class="item"><span class="item-1">
       <img
         :src="require(`@/assets/images/icons/${items.type}-cards.svg`)"
         width="20"
       ></span><span class="item-2"><span class="item-3">●●●● ●●●● ●●●●</span><span class="item-4">{{ items.number.substr(-5) }}</span></span></span>

      <i><svg
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
    </p>
    <span
      v-if="cardvalidate"
      class="alert-control"
    >Карта не выбрана</span>
    <ul v-if="systemtogg">
      <li
        v-for="items in selectarrayone"
        :key="items.id"
        class="topup-box-dropdown-items card"
        @click="systemItems(items)"
      >

        <span class="item"><span
          class="item-1"
          style="width:auto; height:auto"
        ><img
          :src="require(`@/assets/images/icons/${items.type}-cards.svg`)"
          width="20"
        ></span><span class="item-2"><span class="item-3">●●●● ●●●● ●●●●</span><span class="item-4">{{ items.number.substr(-5) }}</span></span></span>
      </li>
      <li
        class="item-btn"
      >
        <router-link :to="{ name: 'cards', params: { show: true } }">
          Добавить карту
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import {
  ref,
} from '@vue/composition-api'
import ClickOutside from 'vue-click-outside'

export default {
  directives: {
    ClickOutside,
  },
  props: ['carditems', 'selectarrayone', 'cardvalidate'],
  setup(props, { emit }) {
    const systemtogg = ref(false)
    function toggleBoxSystem() {
      systemtogg.value = !systemtogg.value
    }

    function addCard() {
      emit('addCardRoute')
    }

    function hideSystem() {
      systemtogg.value = false
    }

    function systemItems(items) {
      systemtogg.value = false
      emit('curencyvalue', items)
    }

    return {
      toggleBoxSystem, systemtogg, addCard, hideSystem, systemItems,
    }
  },
}
</script>
