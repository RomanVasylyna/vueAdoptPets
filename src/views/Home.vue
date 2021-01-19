<template>
  <div class="home">

    <h1>Adopt a new Best Friend</h1>

    <!-- Total Number of Animals -->
    <p>Total Animals Number : <span class="font-weight-bold">{{ animalsCount }}</span></p>

    <button class="btn btn-primary" @click="togglePetForm">Add New Pet</button>

    <b-form @submit="handleSubmit" v-if="petForm" class="mt-3">

      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" label="Pet's Age:" label-for="input-4">
        <b-form-input
          id="input-4"
          v-model="formData.age"
          placeholder="Enter age"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>


    </b-form>
  
  

    </div>

</template>




<script>
//Importing Vuex 
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',

  data() {
  return {
  petForm: false,

  formData: {
  name: '',
  age: 0,
  species: null
  },

  }  
  },
  
  computed: {
  ...mapGetters([
  'animalsCount'  
  ])
  },


  methods: {
  
  // vuex actions
  ...mapActions([
  'addPet'
  ]),

  togglePetForm() {
  this.petForm = !this.petForm; //Toggle Form
  },
  
  handleSubmit(e) {
  e.preventDefault();

  let { species, age, name } = this.formData
    
  let payload = {
  species,
  pet: {
  name,
  age  
  }  
  };

  this.addPet(payload);
  
  //Clear Form
  this.formData = {};

  },

  }
}
</script>

<style>
</style>
