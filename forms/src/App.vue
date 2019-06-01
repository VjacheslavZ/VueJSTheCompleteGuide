<template>
  <div>
    <app-header/>

    <div class="container">
      <div>
        <button @click="compToRender = 'compHome'">Home</button>
        <button @click="compToRender = 'compContact'">Contact</button>
        <button @click="compToRender = 'compPage'">Page</button>
      </div>

      <keep-alive>
        <component :is="compToRender"></component>
      </keep-alive>
    </div>

    <app-footer/>
  </div>
</template>

<script>
  import compContact from './Components/Contact';
  import compHome from './Components/Home';
  import compPage from './Components/Page';

  export default {
    data() {
      return {
        compToRender: 'compContact',
      }
    },
    components: {
      compContact,
      compHome,
      compPage,
    },
    methods: {

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
