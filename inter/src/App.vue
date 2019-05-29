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

      <compAbilities>
        <ul slot="main_hab">
          <li v-for="(hab, index) in habilities" :key="index">
            {{ hab }}
          </li>
        </ul>
        <div slot="noted">
          <p>The user also knows php</p>
        </div>
        <div>
          <a href="#">See more about this user</a>
        </div>
        <div :slot="slotName">
          Other content
        </div>
      </compAbilities>
    </div>

    <compFooter/>
  </div>
</template>

<script>
  import compFooter from './Components/Header_footer/Footer';
  import compUserProfile from './Components/User/Profile';
  import compFriends from './Components/User/Friends';
  import compAbilities from './Components/User/Abilities';

  export default {
    data() {
      return {
        name: 'Francis',
        lastname: 'Jones',
        habilities: ['JS', 'CSS', 'HTML'],
        age: 25,
        parents: {
          mother: 'marta',
          father: 'Mario'
        },
        slotName: ''
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
      compAbilities,
    },
    created() {
      setTimeout(() => {
        this.slotName = 'other'
      }, 3000)
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
