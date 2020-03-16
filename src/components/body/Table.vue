<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title">DataTable with default features</h3>
        </div>
        <!-- /.card-header -->
        <div class="card-body">
          <table id="example1" class="table table-bordered table-striped">
            <thead>
            <tr>
              <th>Name</th>
              <th>Telp</th>
              <th>Email</th>
              <th>Address</th>
              <th>Gender</th>
              <th>Birth</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in getEmployees" :key="item.id">
              <td><a href="#"> {{item.name}} </a></td>
              <td> {{item.telp}} </td>
              <td> {{item.email}} </td>
              <td> {{item.address}} </td>
              <td> {{item.gender}} </td>
              <td> {{item.birth}} </td>
            </tr>
            </tbody>
          </table>
        </div>
        <!-- /.card-body -->
      </div>
    </div>
  </div>
</template>
<script>
  $(function () {
    $("#example1").DataTable({
      "responsive": true,
      "autoWidth": false,
    });
  });

import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters ({
      getEmployees : 'getEmployees'
    })
  },
  methods: {
    ...mapActions ({
      fetchEmployees : 'fetchEmployees'
    })
  },
  created () {
    this.fetchEmployees()
  },
}
</script>
