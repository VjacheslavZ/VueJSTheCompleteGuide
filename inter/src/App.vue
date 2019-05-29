<template>
  <div>
    <app-header></app-header>
    {{ name }}
    <compUserProfile
      :userName="name"
      :userLastname="lastname"
      :userAge="age"
      :userParents="parents"
      @updateName="name = $event"
      :updateLastName="updateLastName"
    />

    <compFooter/>
  </div>
</template>

<script>
  import compFooter from './Components/Header_footer/Footer';
  import compUserProfile from './Components/User/Profile';

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
