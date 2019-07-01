<template>
  <div class="container">
    <div class="signin_container">
      <h1>Sign in</h1>

      <form @sumbit.prevent="onSubmit">
        <div class="input_field">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email">
        </div>
        <div class="input_field">
          <label for="password">Email</label>
          <input type="password" id="password" v-model="formData.password">
        </div>

        <button type="submit">Sign in</button>
      </form>

    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				formData: {
					email: '',
          password: '',
        }
      }
    },
    methods: {
	    onSubmit() {
	    	console.log('sdasdas')
      }
    }
	}
</script>

<style scoped>

</style>
