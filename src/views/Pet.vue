<template>
  <div class="pet">
    <h1>{{ animal.name }} /{{$route.params.species}}</h1> 
    <p>{{ animal.age }} y.o</p>
    <p>Breed : {{ animal.breed }}</p>
  </div>
</template>


<script>
// Importing State from vuex
import { mapState } from 'vuex';

export default {

  data() {
  return {
  animal: {}  
  }
  },
  
  computed: {
  ...mapState([
  'cats',
  'dogs'  
  ])  
  },

  mounted() {
  let animal = this[this.$route.params.species][this.$route.params.id]; 
  this.animal = animal;
  }  

}
</script>
