<template>
  <div class="modal-delete-card">
    <p class="modal-delete-img">
      <img src="@/assets/images/icons/warning.svg">
    </p>
    <p class="modal-delete-title">Вы действительно хотите<br>
      удалить карту?</p>
    <p class="modal-delete-text">
      {{ cardvalue[0].namecard }}
    </p>
    <p class="modal-delete-text two">
      <span>●●●● ●●●● ●●●●</span><span>{{ cardvalue[0].number.substr(-5) }}</span>
    </p>
    <div class="modal-delete-control">
      <div class="modal-delete">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          @click="deleteCard(cardvalue[0].id)"
        >
          Удалить
        </b-button>
      </div>
      <div class="modal-delete">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="outline-primary"
          @click="$emit('showClose')"
        >
          Отмена
        </b-button>
      </div>
    </div>

  </div>
</template>
<script>
import {
  BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'
import store from '@/store'

export default {
  emits: ['showClose'],
  components: { BButton },
  directives: {
    Ripple,
  },
  props: ['cardvalue'],
  setup(_, { emit }) {
    function deleteCard(item) {
      store.commit('viewsCards/deleteCard', item)
      emit('showClose')
    }
    return { deleteCard }
  },
}
</script>
