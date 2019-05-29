<template>
    <div class="container">
      <div class="user_profile">
        <h3>user information:</h3>
        <ul>
          <li><span>Name: {{ userName }}</span></li>
          <li><span>Lastname: {{ userLastname }}</span></li>
          <li><span>Age: {{ userAge }}</span></li>
        </ul>

        <h3>Parents</h3>
        <ul>
          <li v-for="(key, value, index) in userParents" :key="index">
            <span>{{ key }} :</span> {{ value }}
          </li>
        </ul>

      </div>
      <button @click="updateName">Update name</button>
      <button @click="updateLastName('Smith')">Update lastname</button>
    </div>
</template>

<script>
  export default {
    props: {
      userName: String,
      userLastname: String,
      userAge: Number,
      userParents: Object,
      updateLastName: Function,
    },
    methods: {
      updateName() {
        //this.userName = 'Steve'
        this.$emit('updateName', 'new name');
      }
    },
   }
</script>

<style scoped>
  span {
    font-weight: 800;
  }
  .user_profile {
    border: 1px solid #2169f3;
    padding: 10px 20px;
  }
</style>
