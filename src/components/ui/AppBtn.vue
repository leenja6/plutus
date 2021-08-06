<template>
  <a
    class="btn-blue"
    @click="onButton"
  >
    <span><img :src="icons"></span>
    <span>{{ title }}</span></a>
</template>

<script>
export default {
  props: ['icons', 'title'],
  emits: ['onClick'],
  setup(_, { emit }) {
    function onButton() {
      emit('onClick')
    }
    return { onButton }
  },
}
</script>
