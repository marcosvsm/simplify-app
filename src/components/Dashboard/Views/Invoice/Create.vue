<template>
<div>
    <div class="card card-plain">
        <div class="card-header">
            <h4 class="title">Invoice</h4>
        </div>
    </div>
<header-invoice v-bind="tableData"></header-invoice>
<body-invoice v-bind="tableData" :tableData="tableData"/>
</div>
</template>
<script>
import HeaderInvoice from './InvoiceHeader.vue';
import BodyInvoice from './InvoiceBody.vue';
import PdfBuilder from '../../Layout/Pdf.vue'
  export default {
    components:  {HeaderInvoice,BodyInvoice,PdfBuilder},  
    data () {
      return {
        tableData:{
                company: {
                id: null,
                name: null,
                phone: null,
                abn: null
                },
                customer: {
                   name: null,
                   abn: null,
                   customer: null
                },
                invoice: {
                    id: null,
                    name: null,
                    description: null,
                    number: null,
                    date: null,
                    due: null,
                    amount: '0.00'
                },
                items:[{
                            id: 1,
                            name: null,
                            description: null,
                            quantity: null,
                            price: null,
                            amount: '0.00'
                    }]
            }
      }
    }
  }

</script>
<style>

</style>
