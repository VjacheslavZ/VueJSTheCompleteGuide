<template>
  <div>
    <app-header></app-header>

    <div class="container">
      <compUserProfile
        :userName="name"
        :userLastname="lastname"
        :userAge="age"
        :userParents="parents"
        @updateName="name = $event"
        :updateLastName="updateLastName"
      />
      <compFriends/>
    </div>

    <compFooter/>
  </div>
</template>

<script>
  import compFooter from './Components/Header_footer/Footer';
  import compUserProfile from './Components/User/Profile';
  import compFriends from './Components/User/Friends';

  export default {
    data() {
      return {
        name: 'Francis',
        lastname: 'Jones',
        age: 25,
        parents: {
          mother: 'marta',
          father: 'Mario'
        }
      }
    },
    methods: {
      updateLastName(value) {
        this.lastname = value;
      }
    },
    components: {
      compFooter,
      compUserProfile,
      compFriends,
    }
  }
</script>

<style>
  body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  .container {
    min-height: 84vh;
    box-sizing: border-box;
    padding: 20px;
  }
</style>
