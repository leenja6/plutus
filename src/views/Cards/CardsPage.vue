<template>

  <div class="card__contener">
    <h1 class="title-h1">
      Банковские карты
    </h1>

    <b-row>
      <b-col
        v-for="item in cards"
        :key="item.id"
        class="cards-items"
        xl="4"
        md="6"
      >
        <div class="card card-body">
          <div class="card-info">
            <div class="card-info-img">
              <span><img
                :src="require(`@/assets/images/icons/${item.type}-cards.svg`)"
              ></span>
            </div>
            <div class="card-info-text">
              <p class="card-info-namebank">
                {{ item.namecard }}
              </p>
              <p class="card-info-namecard">
                <span>●●●● ●●●● ●●●●</span><span>{{ item.number.substr(-5) }}</span>
              </p>
            </div>
          </div>
          <div class="card-btn">
            <p>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="outline-primary"
                class="mt-1 mr-1"
                @click="DeleteModal(item)"
              >
                <feather-icon
                  icon="XCircleIcon"
                  class="mr-50"
                  size="17"
                />
                Удалить
              </b-button>
            </p>
            <p>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                variant="outline-primary"
                class="mt-1 mr-1"
                size="17"
                @click="showModal(item)"
              >
                <feather-icon
                  icon="EditIcon"
                  class="mr-50"
                />
                Редактировать
              </b-button>
            </p>
          </div>
        </div>
      </b-col>

      <b-col
        class="cards-items"
        xl="4"
        md="6"
      >
        <div class="card card-body">
          <p class="btn-one">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              variant="outline-primary"
              class="mt-1 mr-1"
              size="17"
              @click="addModal"
            >
              <feather-icon
                icon="PlusCircleIcon"
                class="mr-50"
              />
              Добавить карту
            </b-button></p>
        </div>
      </b-col>
    </b-row>
    <b-modal
      v-model="show"
      :hide-footer="true"
      :hide-header="true"
      centered
    >
      <component
        :is="layout +'-card'"
        :cardvalue="cardsItem"
        @showClose="show = false"
      />

    </b-modal>

  </div>

</template>
<script>
import {
  BRow,
  BCol,
  BModal,
  VBModal,
  BButton,
} from 'bootstrap-vue'

import Ripple from 'vue-ripple-directive'
import {
  computed, onMounted, ref,
} from '@vue/composition-api'
import store from '@/store'
import router from '@/router'
import EditCard from './EditCard.vue'
import DeleteCard from './DeleteCard.vue'
import AddCard from './AddCard.vue'

export default {
  components: {
    EditCard,
    DeleteCard,
    AddCard,
    BRow,
    BCol,
    BModal,
    BButton,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  setup() {
    const layout = ref('')
    const show = ref(false)
    const cards = computed(() => store.state.viewsCards.cards)
    const cardsItem = ref([])

    onMounted(() => {
      if (router.history.current.params.show) {
        layout.value = 'add'
        show.value = true
      }
    })

    function showModal(item) {
      layout.value = 'edit'
      show.value = true
      cardsItem.value = [item]
    }

    function DeleteModal(item) {
      layout.value = 'delete'
      show.value = true
      cardsItem.value = [item]
    }

    function addModal() {
      layout.value = 'add'
      show.value = true
    }
    return {
      show,
      layout,
      cards,
      showModal,
      cardsItem,
      DeleteModal,
      addModal,

    }
  },
}
</script>
