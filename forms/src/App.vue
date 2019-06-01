<template>
  <div>
    <app-header/>
    <div class="container">
      <form>
        <div class="row">
          <div class="col-xs-12">
            <h1>Contact us</h1>
            <hr>

            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                id="name"
                class="form-control"
                v-model.lazy="formdata.name"
              >
              {{ formdata.name }}
            </div>

            <div class="form-group">
              <label for="lastname">Lastname</label>
              <input
                type="text"
                id="lastname"
                class="form-control"
                v-model="formdata.lastname"
              >
            </div>

            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                id="subject"
                class="form-control"
                v-model="formdata.subject"
              >
            </div>

            <div class="form-group">
              <label for="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="3"
                class="form-control"
                v-model="formdata.message"
              ></textarea>
            </div>

            <div class="form-group">
              <label for="newsLetter">Message</label>
              <input
                type="checkbox"
                id="newsLetter"
                v-model="formdata.newsLetter"
              >
              <label for="promotions">Promotions</label>
              <input
                type="checkbox"
                id="promotions"
                v-model="formdata.promotions"

              >
            </div>

            <button
              class="btn btn-primary"
              @click.prevent="submitForm"
            >
              Submit
            </button>

          </div>
        </div>
      </form>
    </div>
    <app-footer/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        formdata: {
          name: '',
          lastname: '',
          subject: '',
          message: '',
          newsLetter: '',
          promotions: '',
        }
      }
    },
    methods: {
      submitForm() {
        console.log(this.formdata);
        console.log(JSON.stringify(this.formdata));
      }
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
