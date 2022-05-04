<template>
<div>
    <div class="card card-plain">
        <div class="card-header">
            <h4 class="title">New Invoice</h4>
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
                name: "MARCOS VINICIUS DE SOUZA MENDES",
                phone: "0404988037",
                abn: "86507573157"
                },
                customer: {
                   name: "Charles Transport Pty Ltd",
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
