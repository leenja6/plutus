<template>
  <ul
    id="link-button"
    class="dropdown-select"
  >

    <b-nav-item-dropdown
      id="dropdown-grouped"
      variant="link"
      class="dropdown-select-cost"
    >
      <template #button-content>
        <div
          class="select-btn"
          @mouseover="overtooltip"
          @mouseleave="leavetooltip"
          @click="clicktooltip"
        >
          <tool-tip-custom
            v-if="tool"
            text="Примерная сумма всех валют на вашем балансе рассчитанная по текущему рыночному курсу"
            :active="tool"
          />
          <span
            class="select-btn-cost"
            :class="cost.token"
          >{{ cost.summ_cost }}</span>
        </div>
      </template>

      <div class="dropdown-box">
        <div class="dropdown-box-crypt">
          <p>Криптовалютные счета</p>
          <ul>
            <li
              v-for="items in cryptcost"
              :key="items.id"
            ><span><span><img
              :height="items.img_height"
              :src="require(`@/assets/images/icons/${items.token}.svg`)"
            ></span><span>{{ items.token }}</span></span><span>{{ items.summ_token.toFixed(8) }}</span></li>

          </ul>
        </div>
        <div class="dropdown-box-crypt">
          <p>Фиатные счета</p>
          <ul>
            <li
              v-for="items in fiatcurrency"
              :key="items.id"
            ><span><span><img
              :height="items.img_height"
              :src="require(`@/assets/images/icons/${items.token}.svg`)"
            ></span><span>{{ items.token }}</span></span><span>{{ CurrencyToken(items.summ_cost) }}</span></li>

          </ul>
        </div>
      </div>

    </b-nav-item-dropdown>
  </ul>
</template>
<script>
import { BNavItemDropdown } from 'bootstrap-vue'
import { computed, onMounted, ref } from '@vue/composition-api'
import store from '@/store'
import CurrencyToken from '../../utils/currencytoken'
import ToolTipCustom from './ToolTipCustom.vue'

export default {
  components: { BNavItemDropdown, ToolTipCustom },
  setup(_, { root }) {
    const tool = ref(false)
    const opentooltip = ref(true)
    const tooltipclass = ref(false)
    const cost = computed(() => store.getters['viewsBalance/filterFiatcurrency'])
    const cryptcost = computed(() => store.state.viewsBalance.cryptocurrency)
    const fiatcurrency = computed(() => store.state.viewsBalance.fiatcurrency)

    onMounted(() => {
      root.$on('bv::dropdown::hide', () => {
        opentooltip.value = true
      })
    })

    function overtooltip() {
      if (opentooltip.value) {
        tool.value = true
      } else {
        tool.value = false
      }
    }

    function leavetooltip() {
      tool.value = false
    }

    function clicktooltip() {
      opentooltip.value = !opentooltip.value
      tool.value = false
    }

    return {
      cost, cryptcost, fiatcurrency, CurrencyToken, tooltipclass, tool, overtooltip, leavetooltip, clicktooltip, opentooltip,
    }
  },
}
</script>
