<template>
  <div class="card">
    <div class="card-body">
      <form>
        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="BILL TO"
                      placeholder="Customer"
                      v-model="customer.name"
                      :required="true"
                      >
            </fg-input>
            <fg-input type="text"
                      placeholder="ABN"
                      v-model="customer.abn"
                      maxlength="11"
                      >
            </fg-input>
            <fg-input type="text"
                      placeholder="Phone"
                      v-model="customer.phone"
                      maxlength="12"
                      >
            </fg-input>
            <fg-input type="text"
                      placeholder="Email"
                      v-model="customer.email"
                      >
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      label="Invoice Number"
                      placeholder="Invoice Number"
                      v-model="invoice.number"
                      :required="true"
                      >
            </fg-input>
            <fg-input type="date"
                      label="Invoice Date"
                      placeholder="Invoice Date"
                      v-model="invoice.date"
                      :required="true"
                      >
            </fg-input>
            <fg-input type="date"
                      label="Payment Due"
                      placeholder="Payment Due"
                      v-model="invoice.due"
                      :required="true"
                      >
            </fg-input>
          </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="card card-plain">
                    <div class="card-body table-full-width">
                        <el-table class="table-striped"
                            :data="items" row-key="id">
                            
                            <el-table-column class="success" label="Items" property="id" width="100px" ></el-table-column>
                            <el-table-column label="Name" property="name" contenteditable="true">
                                <template slot-scope="scope">
                                <fg-input type="text"
                                                placeholder="Name"
                                                v-model="scope.row.name"
                                                :required="true"
                                                maxlength="45"
                                                ></fg-input>
                                </template>
                            </el-table-column>
                            <el-table-column class="danger" label="Description" property="description" contenteditable="true">
                                <template slot-scope="scope">
                                <fg-input type="text"
                                                placeholder="Description"
                                                v-model="scope.row.description"
                                                maxlength="90"
                                                ></fg-input>
                                </template>
                            </el-table-column>
                            <el-table-column class="info" label="Quantity" property="quantity">
                                <template slot-scope="scope">
                                <fg-input type="text"
                                              id="quantity"
                                                placeholder="Quantity"
                                                maxlength = "10"
                                                v-model="scope.row.quantity"
                                                @keyup="setAmount(scope.row)"
                                                @keypress="onlyNumber()"
                                                :required="true"
                                                ></fg-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="Price" property="price">
                                <template slot-scope="scope">
                                <fg-input type="text"
                                          id="price"
                                                placeholder="Price"
                                                maxlength = "10"
                                                v-model="scope.row.price"
                                                @keyup="setAmount(scope.row)"
                                                @keypress="onlyNumber()"
                                                :required="true"
                                                ></fg-input>
                                </template>
                            </el-table-column>
                            <el-table-column label="Amount" property="amount" >
                              <template slot-scope="scope">
                              ${{scope.row.amount}}
                              </template>
                            </el-table-column>
                            
                        </el-table>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center">
          <p-button class="info" icon @click="getItem(items)">
            <i class="fa fa-plus-circle"></i>
          </p-button>
        </div>
        <div>
          <div>
            <span>Subtotal: </span>
            <span>${{invoice.amount}}</span>
          </div>
          <div>
            <span>Total: </span>
            <span>${{invoice.amount}}</span>
          </div>
        </div>
        <div>
          <div>
            <span>Notes / Terms</span>
            <textarea type="text"
            ></textarea>
          </div>
        </div>
       <!-- <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="createInvoice">
            Save and Continue
          </button>
        </div> -->
        <pdf-builder :tableData="tableData"></pdf-builder>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
import {Row, Table, TableColumn} from 'element-ui'
import PdfBuilder from '../../Layout/Pdf.vue'
  export default {
    components:{
                [Table.name]: Table,
                [TableColumn.name]: TableColumn,
                PdfBuilder
    },
    data(){
      return {
        subtotal: 0.00,
        total: 0.00 
      }
    },
    props:{
          tableData: Object,
           customer: {
               name: null,
               abn: null,
               email: null,
               phone: null
            },
            invoice: {
                id: null,
                name: null,
                description: null,
                number: null,
                date: null,
                due: null,
                amount: null
            },
            items: null
    },

    methods: {
         getItem(items){
          var index = items.length+1;
           this.items.push({
                            id: index,
                            name: null,
                            description: null,
                            quantity: null,
                            price: null,           
                            amount: '0.00'
                });
        },
        amountTotal(){
        //  var table = document.getElementsByTagName("table")[1];
        //  var td = table.getElementsByClassName("el-table_1_column_6");
          var amount = 0;
          for(var i=0;i < this.items.length;i++){
              amount += parseFloat(this.items[i].amount);
          }
          this.invoice.amount = amount.toFixed(2);
          this.invoice.amount = amount.toFixed(2);
        },
        setAmount(row){
          var tagName = event.target.parentNode.tagName
          var parent = event.target.parentNode;
          var amount = null;
          console.log(row);
          //get the row
            while(tagName != "TR"){
              parent = parent.parentNode;
              tagName = parent.tagName;
            }

            if(event.target.id == 'price' && parent.getElementsByTagName("input").quantity.value != ''){
              amount = event.target.value * parent.getElementsByTagName("input").quantity.value;
                    //          parent.lastElementChild.lastElementChild.innerHTML = '<span>$</span>'+'<span>'+amount.toFixed(2)+'</span>';
                    row.amount = amount.toFixed(2);
            }else if(event.target.id == 'quantity' && parent.getElementsByTagName("input").price.value != ''){
              amount = event.target.value * parent.getElementsByTagName("input").price.value;
                  //            parent.lastElementChild.lastElementChild.innerHTML = '<span>$</span>'+'<span>'+amount.toFixed(2)+'</span>';
                  row.amount = amount.toFixed(2);
            }//else parent.lastElementChild.lastElementChild.innerHTML = '<span>$</span>'+'<span>0.00</span>';
            this.amountTotal();
        },
        onlyNumber(){
          let keyCode = (event.keyCode ? event.keyCode : event.which);
            if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) { // 46 is dot
                event.preventDefault();
            }
        }

    }
  }

</script>
<style>

</style>


