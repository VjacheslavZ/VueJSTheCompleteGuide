<template>
  <div class="user_profile">
    <hr>
    <slot name="other">Loading...</slot>
    <hr>

    <h3>User profile</h3>
    <div>
      <slot name="main_hab"></slot>
    </div>
    <div>
      <slot name="noted"></slot>
    </div>
    <hr>
    <slot></slot>

  </div>
</template>

<script>
   export default {
      data() {
        return {
          habilities: ['JS', 'CSS', 'HTML']
        }
      }
   }
</script>

<style scoped>
  li {
    color: red;
  }
  .user_profile {
    border: 1px solid #2169f3;
    padding: 10px 20px;
  }
</style>
