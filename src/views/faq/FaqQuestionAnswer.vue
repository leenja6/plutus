<template>
  <div>
    <app-collapse
      id="faq-payment-qna"
      accordion
      type="margin"
      class="mt-2"
    >

      <app-collapse-item
        v-for="( data,index) in options.qandA"
        :key="index"
        :title="data.question"
      >
        {{ data.ans }}
      </app-collapse-item>

    </app-collapse>

    <!--/ collapse -->
  </div>
</template>
<script>
import AppCollapse from '@core/components/app-collapse/AppCollapse.vue'
import AppCollapseItem from '@core/components/app-collapse/AppCollapseItem.vue'

export default {
  components: {
    AppCollapseItem,
    AppCollapse,
  },
  props: {
    options: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
