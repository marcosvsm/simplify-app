<template>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-md-8">
            <fg-input type="text"
                      label="COMPANY"
                      :disabled="false"
                      placeholder="Name"
                      v-model="company.name"
                      maxlength="50"
                      :required="true"
                      >
            </fg-input>
          </div>
          <div class="col-md-4">
            <h3>INVOICE</h3>
            <fg-input type="text"
                      placeholder="Phone"
                      v-model="company.phone"
                      maxlength="12"
                      >
            </fg-input>
            <fg-input type="text"
                      placeholder="ABN"
                      v-model="company.abn"
                      maxlength="11"
                      >
            </fg-input>
          </div>
        </div>
        
        </form>
    </div>
   </div>
</template>
<script>
  export default {
    props:{
        company: {
            id: null,
            name: null,
            phone: null,
            abn: null   
        }
            
    }
  }

</script>
<style>

</style>
