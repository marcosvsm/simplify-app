<template>
<header-company>
    <div class="card card-plain">
        <div class="card-header">
            <h4 class="title">Companies</h4>
            <a href="create" class="btn btn-info btn-round btn-sm"> New Company</a>
        </div>
    </div>
</header-company>
</template>
<script>
import {Table, TableColumn} from 'element-ui'
export default {
components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  data () {
      return {
      companies: null
      }
    },
   
}
</script>
<style>

</style>
