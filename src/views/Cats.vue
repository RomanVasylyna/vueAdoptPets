<template>
  <div class="cats">
    <h1>Cats for adoption</h1>
    <b-table striped hover :items="cats">
      
      <!-- First Column contains links -->
      <template #cell(name)="data">

       <router-link :to="`/pets/cats/${data.index}`">
        {{ data.value }}
        </router-link>

      </template>  

    </b-table>
  </div>
</template>


<script>
// Importing Cats Array from vuex store state
import { mapState } from 'vuex'

export default {
name: 'Cats',

computed: {
...mapState([
'cats'  
])
},
 
 

}
</script>
