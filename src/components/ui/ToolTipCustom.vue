<template>
  <div
    class="tooltip-box"
    :class="active ? 'active': ''"
  >
    <div>
      <p>{{ text }}</p>
      <i />
    </div>
  </div>

</template>
<script>
export default {
  props: ['text', 'active'],
  setup() {

  },
}
</script>
