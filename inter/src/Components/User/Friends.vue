<template>
  <div class="user_profile">
    <h2>User friends:</h2>
    <ul>
      <li v-for="(friend, index) in friends" :key="index">
        {{ friend }}
      </li>
    </ul>
  </div>
</template>

<script>
  import { bus } from '../../main';

  export default {
    data() {
      return {
        friends: ['Ronnie', 'Martia']
      }
    },
    created() {
      bus.$on('addFriend', (value) => {
        this.friends.push(value)
      })
    }
  }
</script>

<style scoped>
  .user_profile {
    border: 1px solid #2169f3;
    padding: 10px 20px;
  }
</style>
