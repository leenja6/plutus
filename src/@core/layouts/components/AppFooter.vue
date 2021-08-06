<template>
  <p class="clearfix mb-0">
    <span class="float-md-left d-block d-md-inline-block mt-25">
      COPYRIGHT  © {{ new Date().getFullYear() }}
      <b-link
        class="ml-25"
        href="#"
        target="_blank"
      ><span class="logo-footer">PLUTUS</span> <span class="title-sub-footer">financial</span></b-link>

    </span>

    <span class="float-md-right d-none d-md-block">Сделано от души
      <img src="@/assets/images/icons/good.svg" />
    </span>
  </p>
</template>

<script>
import { BLink } from 'bootstrap-vue'

export default {
  components: {
    BLink,
  },
}
</script>
