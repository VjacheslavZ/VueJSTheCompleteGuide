<template>
    <div>
        <h1>User</h1>
        <div>{{ userId }}</div>

        <div>{{ $route.query.user }}</div>
        <div>{{ $route.query.someThing }}</div>
        <hr>

        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Francis Jones</h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip </p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
              <div @click="goToHome">
                Go back home !!
              </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userId: this.$route.params.id,

    }
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'home' });
    }
  },
  created() {
    console.log(this.$route)
  }
}
</script>

<style>

</style>
