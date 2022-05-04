<template>
    
<div class="card"> 
        <div class="card-body">
            <div class="row">
            <div class="col-md-2">
                <div class="card-title">
                    <span>Invoice Number</span>
                </div>
                <div class="card-subtitle">
                    {{invoice.ref}}
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="card-title">
                    <span>To</span>
                </div>
                <div class="card-subtitle">
                   {{invoice.name}}
                </div>
            </div>
            <div class="col-md-2">
            <div class="card-title">
                    <span>Total</span>
                </div>
                <div class="card-subtitle">
                    {{invoice.amount}}
                </div>
            </div>
            <div class="col-md-2">
            <div class="card-title">
                    <span>Due</span>
                </div>
                <div class="card-subtitle">
                    {{invoice.due_date}}
                </div>
            </div>
            
            </div>
            <div class="row" style="display:none" >
            
            <div class="col-md-2">
                <div class="card-title">
                    <span>Date</span>
                </div>
                <div class="card-subtitle">
                    {{invoice.invoice_date}}
                </div>
            </div>
            
            
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['invoice']
}
</script>