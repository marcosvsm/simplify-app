<template>
<div class="container">
    <div align="center" style="padding:30px">
   <h3>Free Invoice</h3>
    </div>
<invoice ></invoice>

</div>
</template>
<script>
import invoice from './Create.vue';
  export default {
    components:  {invoice},  
    data () {
      return {
        
      }
    }
  }

</script>
<style>

</style>
