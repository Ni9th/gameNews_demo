<template>
  <div class="pWrapper">
    <login-page></login-page>
  </div>
</template>
<script>
import loginPage from '_c/login.vue'
export default {
  components: {
    loginPage
  }
}
</script>
<style scoped>
.pWrapper{
  width: 100%;
  height: 100%;
}
</style>
