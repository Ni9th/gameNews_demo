<template>
  <div class="pWrapper">
    <b-filter></b-filter>
  </div>
</template>
<script>
import bFilter from '@/components/filter.vue'
export default {
  components: {
    bFilter
  },
  methods: {
  }
}
</script>
<style scoped>
.pWrapper{
  width: 100%;
  height: calc(100% - 6.2rem);
  /* height: 100%; */
  overflow-y: scroll;
}
</style>
