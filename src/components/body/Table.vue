<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header row">
          <div class="col-sm-6 row">
            <div class="btn-group col-md-offset-6">
              <button v-for="(item, key) in getStatus" :key="key" @click="setActiveStatus(item)" type="button" class="btn text-md btn-default text-capitalize"> {{ item }} </button>
            </div>
          </div>
          <div class="col-sm-6 row justify-content-end">
            <div class="btn-group col-md-offset-6">
              <button type="button" class="btn bg-info text-md btn-default"> Eksport CSV </button>
              <button type="button" class="btn bg-info text-md btn-default"> Import CSV </button>
              <button type="button" class="btn bg-info text-md btn-default"> Eksport CSV </button>
            </div>
          </div>
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
              <th>Departement</th>
              <th>Status</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in getData" :key="item.id">
              <td>{{item.name}}</td>
              <td> {{item.telp}} </td>
              <td> {{item.email}} </td>
              <td> {{item.address}} </td>
              <td> {{item.gender}} </td>
              <td> {{item.birth}} </td>
              <td> {{item.depart}} </td>
              <td> {{item.status}} </td>
              <td>
                <router-link :to="{name: 'employeeedit', params: { id: item.id }}" tag="a">
                  <span class="fas fa-pencil-alt mr-2">
                  </span>
                </router-link>
                  
                
                <a href="#">
                  <span @click="del(item.id)" class="fas fa-times"></span>
                </a>
              </td>
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
 

import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
export default {
  data() {
    return{
      activeStatus: "permanent"
    }
  },
  computed: {
    ...mapGetters ({
      getEmployees : 'getEmployees',
      getStatus : 'getStatus',
      getActiveStatus : 'getActiveStatus'
    }),
    getData() {
      return this.getEmployees.filter(ob=>ob.status===this.activeStatus)
    },
  },
  methods: {
    ...mapActions ({
      fetchEmployees : 'fetchEmployees',
      fetchStatus: 'fetchStatus',
      setActiveStatus : 'setActiveStatus'
    }),
    setActiveStatus(a) {
      // console.log (a)
      this.activeStatus=a;
    },
    del(id){
    
        axios.delete('http://localhost:3000/employees/' + id).then(res =>{
          alert("Berhasil didelete")
          this.created()
          this.getData()
        })
    }
  },
  created() {
    this.fetchEmployees(),
    this.fetchStatus()
  },
}
</script>
