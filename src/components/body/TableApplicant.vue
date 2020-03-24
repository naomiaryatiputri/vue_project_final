<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-header row">
          <div class="col-sm-6 row">
            <div class="btn-group col-md-offset-6">
              <button v-for="(item, key) in getStatusApplicant" :key="key" @click="setActiveStatusApplicant(item)" type="button" class="btn text-md btn-default text-capitalize"> {{ item }} </button>
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
              <th>Apply To</th>
              <th>Status</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in getDataApplicant" :key="item.id">
              <td><a href="/profile"> {{item.name}} </a></td>
              <td> {{item.telp}} </td>
              <td> {{item.email}} </td>
              <td> {{item.address}} </td>
              <td> {{item.gender}} </td>
              <td> {{item.birth}} </td>
              <td> {{item.applyTo}} </td>
              <td> {{item.status}} </td>
              <td>
                <a href="/data-details">
                  <span class="fas fa-pencil-alt mr-2"></span>
                </a>
                <a href="#">
                  <span class="fas fa-times"></span>
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

export default {
  data() {
    return{
      activeStatusApplicant: "interview"
    }
  },
  computed: {
    ...mapGetters ({
      getApplicant : 'getApplicant',
      getStatusApplicant : 'getStatusApplicant',
      getActiveStatusApplicant : 'getActiveStatusApplicant'
    }),
    getDataApplicant() {
      return this.getApplicant.filter(ob=>ob.statusApplicant===this.activeStatusApplivant)
    },
  },
  methods: {
    ...mapActions ({
      fetchApplicant : 'fetchApplicant',
      fetchStatusApplicant: 'fetchStatusApplicant',
      setActiveStatusApplicant : 'setActiveStatusApplicant'
    }),
    setActiveStatusApplicant(a) {
      // console.log (a)
      this.activeStatusApplicant=a;
    }
  },
  created () {
    this.fetchApplicant(),
    this.fetchStatusApplicant()
  },
}
</script>
