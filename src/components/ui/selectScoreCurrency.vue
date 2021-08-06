<template>
  <div
    v-click-outside="hideSystem"
    class="topup-box-dropdown"
  >
    <p
      v-if="carditems.length === 0"
      class="system-title"
      :class="systemcontrolvalidate ? 'alert' : ''"
      @click="toggleBoxSystem"
    >
      Выберите систему
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
      class="topup-box-score-title"
      @click="toggleBoxSystem"
    ><span class="item"><span class="item-1">
       <img
         :src="require(`@/assets/images/icons/${items.icons}.svg`)"
         width="28"
       ></span><span class="item-2">{{ items.title ? items.title : items.token }}</span></span>

      <span
        v-if="items.summ_cost !== undefined"
        class="item-3"
      >{{ items.summ_cost.toFixed(2) }}</span>
      <span
        v-if="items.summ_token !== undefined"
        class="item-3"
      >{{ items.summ_token.toFixed(8) }}</span>
      <span
        v-if="items.procent !== undefined"
        class="item-3"
      >{{ items.procent.toFixed(2) }}</span>

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
      v-if="systemcontrolvalidate"
      class="alert-control"
    >Система не выбрана</span>
    <ul v-if="systemtogg">
      <li class="topup-box-dropdown-title">
        {{ titleone }}
      </li>

      <li
        v-for="items in selectarrayone"
        :key="items.id"
        class="topup-box-dropdown-items"
        @click="systemItems(items)"
      >

        <span class="item"><span class="item-1"><img
          :src="require(`@/assets/images/icons/${items.icons}.svg`)"
          width="28"
        ></span><span class="item-2">{{ items.title ? items.title : items.token }}</span></span>

        <span
          v-if="items.summ_cost !== undefined"
          class="item-3 11"
        >{{ items.summ_cost.toFixed(2) }}</span>

        <span
          v-if="items.summ_token !== undefined"
          class="item-3 22"
        >{{ items.summ_token.toFixed(8) }}</span>

        <span
          v-if="items.procent !== undefined"
          class="item-3 33"
        >{{ items.procent.toFixed(2) }}</span>
      </li>
      <li class="topup-box-dropdown-title title">
        {{ titletwo }}
      </li>
      <li
        v-for="items in selectarraytwo"
        :key="items.id"
        class="topup-box-dropdown-items"
        @click="systemItems(items)"
      ><span class="item"><span class="item-1"><img
         :src="require(`@/assets/images/icons/${items.icons }.svg`)"
         width="28"
       ></span><span class="item-2">{{ items.title ? items.title : items.token }}</span></span>
        <span
          v-if="items.summ_cost !== undefined"
          class="item-3 11"
        >{{ items.summ_cost.toFixed(2) }}</span>

        <span
          v-if="items.summ_token !== undefined"
          class="item-3 22"
        >{{ items.summ_token.toFixed(8) || '000000' }}</span>

        <span
          v-if="items.procent !== undefined "
          class="item-3 33"
        >{{ items.procent.toFixed(2) }}</span>

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
  props: ['carditems', 'selectarrayone', 'titleone', 'titletwo', 'selectarraytwo', 'systemcontrolvalidate'],
  setup(props, { emit }) {
    const systemtogg = ref(false)
    function toggleBoxSystem() {
      systemtogg.value = !systemtogg.value
    }

    function hideSystem() {
      systemtogg.value = false
    }

    function systemItems(items) {
      systemtogg.value = false
      emit('curencyvalue', items)
    }

    return {
      toggleBoxSystem, systemtogg, hideSystem, systemItems,
    }
  },
}
</script>
