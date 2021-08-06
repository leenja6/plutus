<template>
  <div>
    <section id="faq-tabs">
      <p class="faq-tabs-title">
        F.A.Q
      </p>
      <b-tabs
        vertical
        content-class="col-12 col-md-8 col-lg-9"
        pills
        nav-wrapper-class="faq-navigation col-md-4 col-lg-3 col-12"
        nav-class="nav-left"
      >

        <b-tab
          v-for="(category, index) in faqData"
          :key="category.title"
          :active="!index"
        >
          <template #title>
            <feather-icon
              :icon="category.icon"
              size="18"
              class="mr-1"
            />
            <span class="font-weight-bold">{{ category.title }}</span>
          </template>

          <faq-question-answer :options="category" />
        </b-tab>

      </b-tabs>
    </section>

    <div class="faq-info row">
      <div class="faq-info-img">
        <img src="@/assets/images/pages/faq-img.svg">
      </div>
      <div class="faq-info-position col-md-4 col-lg-3 col-12 " />
      <div class="faq-info-text col-12 col-md-8 col-lg-9">
        <p class="faq-info-text-title">
          У вас еще остались вопросы?
        </p>
        <p class="faq-info-text-subtitle">
          Если вы не нашли ответ на свой вопрос,<br> вы всегда можете связаться с нами в чате
        </p>
        <p class="faq-info-text-btn">
          <a
            class="btn faq-btn"
            href="#"
            @click.prevent="chatOpen(false)"
          >
            Написать в поддержку
          </a>
        </p>
      </div>
    </div>

  </div>
</template>
<script>
import { BTabs, BTab } from 'bootstrap-vue'
import { computed } from '@vue/composition-api'
import store from '@/store'
import FaqQuestionAnswer from './FaqQuestionAnswer.vue'

export default {
  components: {
    BTabs,
    BTab,
    FaqQuestionAnswer,

  },
  setup() {
    const faqData = computed(() => store.state.viewsFaq.data)
    function chatOpen(item) {
      store.commit('viewschats/toggle', item)
    }
    return { faqData, chatOpen }
  },
}
</script>
