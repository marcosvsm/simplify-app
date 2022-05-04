<template>
<div>
    <div class="card card-plain">
        <div class="card-header">
            <h4 class="title">Invoices</h4>
            <a href="create" class="btn btn-info btn-round btn-sm"> New Invoice</a>
        </div>
    </div>
    <list-invoice v-for="invoice in invoices"
                    v-bind:key="invoice.id"
                    v-bind:invoice="invoice"
                   >
                    </list-invoice>
<!--    <div class="card" v-for="item in tableData" :key="item.number"> 
        <div class="card-body">
            <div class="row">
            <div class="col-md-2">
                <div class="card-title">
                    <span>Invoice Number</span>
                </div>
                <div class="card-subtitle">
                    {{item.number}}
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card-title">
                    <span>To</span>
                </div>
                <div class="card-subtitle">
                    {{item.client}}
                </div>
            </div>
            <div class="col-md-2">
            <div class="card-title">
                    <span>Total</span>
                </div>
                <div class="card-subtitle">
                    {{item.amount}}
                </div>
            </div>
            <div class="col-md-2">
            <div class="card-title">
                    <span>Due</span>
                </div>
                <div class="card-subtitle">
                    {{item.due}}
                </div>
            </div>
            <div class="col-md-2">
            <div class="card-title">
                    <span>Status</span>
                </div>
                <div class="card-subtitle">
                    {{item.status}}
                </div>
            </div>
            
            </div>
            <div class="row" style="display:none" @click.native="toggle">
            
            <div class="col-md-2">
                <div class="card-title">
                    <span>Date</span>
                </div>
                <div class="card-subtitle">
                    {{item.date}}
                </div>
            </div>
            <div class="col-md-3">
                <div class="card-title">
                    <span>From</span>
                </div>
                <div class="card-subtitle">
                    {{item.company}}
                </div>
            </div>
            
            </div>
            <div class="clearfix"></div>
        </div>
    </div> -->
</div>
</template>
<script>
import {Table, TableColumn} from 'element-ui'
import ListInvoice from './ListInvoice.vue';
export default {
components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    ListInvoice
  },
  data () {
      return {
      /*  tableData: [{
          number: '0001',
          company: 'Marcos Vinicius de Souza Mendes ',
          client: 'Charles Transport Pty Ltd',
          date: '9/20/2021',
          due: '9/22/2021',
          amount: '925.00',
          status: 'Paid'
        },
        {
          number: '0002',
          company: 'Marcos Vinicius de Souza Mendes ',
          client: 'Simplify Business',
          date: '9/20/2021',
          due: '9/22/2021',
          amount: '925.00',
          status: 'Paid'
        }
        ,
        {
          number: '0003',
          company: 'Marcos Vinicius de Souza Mendes ',
          client: 'Simplify Business',
          date: '9/20/2021',
          due: '9/22/2021',
          amount: '925.00',
          status: 'Paid'
        }
        ,
        {
          number: '0004',
          company: 'Marcos Vinicius de Souza Mendes ',
          client: 'Simplify Business',
          date: '9/20/2021',
          due: '9/22/2021',
          amount: '925.00',
          status: 'Paid'
        }
        ,
        {
          number: '0005',
          company: 'Marcos Vinicius de Souza Mendes ',
          client: 'Simplify Business',
          date: '9/20/2021',
          due: '9/22/2021',
          amount: '925.00',
          status: 'Paid'
        }
        ],*/
      invoices: null
      }
    },
   created() {
      this.getInvoices();
    },
    methods: {
    async getInvoices() {
    await this.$store.dispatch("invoices/list")
    this.invoices = await this.$store.getters["invoices/list"]
    console.log(this.invoices);
    },
    toggle() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  }
}
</script>
<style>

</style>
