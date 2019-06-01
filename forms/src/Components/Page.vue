<template>
  <div>
    Page
  </div>
</template>

<script>
  export default {
    destroyed() {
      console.log('destroyed')
    },
    activated() {
      console.log('activated')
    },
    deactivated() {
      console.log('deactivated')
    }
  }
</script>

<style scoped>

</style>
