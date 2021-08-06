<template>
  <ul>
    <li class="navigation-header text-truncate">
    <span>ФИНАНСЫ</span>
 </li>
    <component
      :is="resolveNavItemComponent(item)"
      v-for="item in finance"
      :key="item.header || item.title"
      :item="item"
    />
    <li class="m-top"></li>
    <li class="navigation-header text-truncate">
    <span>ОПЕРАЦИИ</span>
 </li>
    <component
      :is="resolveNavItemComponent(item)"
      v-for="item in operations"
      :key="item.header || item.title"
      :item="item"
    />
  </ul>
</template>

<script>
import { resolveVerticalNavMenuItemComponent as resolveNavItemComponent } from '@core/layouts/utils'
import { provide, ref } from '@vue/composition-api'
import VerticalNavMenuHeader from '../vertical-nav-menu-header'
import VerticalNavMenuLink from '../vertical-nav-menu-link/VerticalNavMenuLink.vue'
import VerticalNavMenuGroup from '../vertical-nav-menu-group/VerticalNavMenuGroup.vue'

export default {
  components: {
    VerticalNavMenuHeader,
    VerticalNavMenuLink,
    VerticalNavMenuGroup,
  },
  props: {
    finance: {
      type: Array,
      required: true,
    },
    operations: {
      type: Array,
      required: true,
    },
  },
  setup() {
    provide('openGroups', ref([]))

    return {
      resolveNavItemComponent,
    }
  },
}
</script>
