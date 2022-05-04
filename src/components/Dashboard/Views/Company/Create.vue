<template>
<div>
  <company-header></company-header>
  <div class="card card-user">
    <div class="image">
      <img src="/static/img/background/damir-bosnjak.jpg" alt="...">
    </div>
    <div class="card-body">
      <div class="author">
        <a href="#">
          <img class="avatar border-gray" src="/static/img/mike.jpg" alt="...">
        </a>
      </div>
    </div>
    <form class="container" style="padding:15px">
        <div class="row">
          <div class="col-md-4">
            <fg-input type="text"
                      label="Company Name"
                      placeholder="Company Name"
                      required="true"
                      v-model="name"
                      >
            </fg-input>
          </div>
          <div class="col-md-2">
            <fg-input type="text"
                      label="ABN"
                      placeholder="ABN"
                      v-model="abn"
                      maxlength="11"
                      >
            </fg-input>
          </div>
          
          <div class="col-md-3">
            <fg-input type="email"
                      label="Email"
                      placeholder="Email"
                      v-model="email"
                      >
            </fg-input>
          </div>
          <div class="col-md-2">

            <fg-input type="text"
                      label="Phone"
                      placeholder="Phone"
                      v-model="phone"
                      >
            </fg-input>
          </div>
        </div>

        <div class="row">
        </div>

        <div class="row">
          <div class="col-md-3">
            <fg-input type="text"
                      label="Address"
                      placeholder="Address"
                      v-model="address"
                      >
            </fg-input>
          </div>
          <div class="col-md-2">
            <fg-input type="text"
                      label="City"
                      placeholder="City"
                      v-model="city"
                      >
            </fg-input>
          </div>
          <div class="col-md-2">
            <fg-input type="text"
                      label="Country"
                      placeholder="Country"
                      v-model="country"
                      >
            </fg-input>
          </div>
          <div class="col-md-2">
            <fg-input type="text"
                      label="Postal Code"
                      placeholder="ZIP Code"
                      v-model="postal"
                      >
            </fg-input>
          </div>
        </div>

        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="createCompany">
            Save
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
  </div>
</div>
</template>
<script>

import CompanyHeader from './CompanyHeader.vue'
  export default {
      components:{
          CompanyHeader
          },
      data () {
        return {
          name: null,
          phone: null,
          abn: null,
          email: null,
          phone: null,
          address: null,
          city: null,
          country: null,
          postal: null
        }
      }
  }

</script>
<style>

</style>
