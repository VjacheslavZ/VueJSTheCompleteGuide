<template>
  <div>
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
            <label for="newsLetter">NewsLetter</label>
            <input
              type="checkbox"
              id="newsLetter"
              value="newsLetter"
              v-model="formdata.extras"
            >
            <label for="promotions">Promotions</label>
            <input
              type="checkbox"
              id="promotions"
              value="promotions"
              v-model="formdata.extras"
            >
            <br/>
          </div>

          <div class="form-group">
            <label for="human">
              <input
                type="radio"
                id="human"
                value="human"
                v-model="formdata.gender"
              >Human
            </label>
            <label for="alien">
              <input
                type="radio"
                id="alien"
                value="alien"
                v-model="formdata.gender"
              >Alien
            </label>

            {{ formdata.gender }}
          </div>

          <div class="form-group">
            <label for="country">Country</label>
            <select
              id="country"
              class="form-control"
              v-model="formdata.country"
            >
              <option :key="index" v-for="(country, index) in countries">
                {{ country }}
              </option>
            </select>
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
</template>

<script>
  export default {
    data() {
      return {
        countries: [
          'EEUU',
          'India',
          'UK',
          'Russia',
        ],
        formdata: {
          name: '',
          lastname: '',
          subject: '',
          message: '',
          extras: [],
          gender: 'alien',
          country: 'India',
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
