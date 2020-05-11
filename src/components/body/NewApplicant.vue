<template>
	<div>
	  <!-- new applicant -->
	  <div class="card">
	    <div class="card-header">
	      <h3 class="card-title">New Applicants</h3>
	      <div class="card-tools">
	        <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
	        </button>
	      </div>
	    </div>
	    <div class="card-body p-0">
        <table class="table table-striped">
          <thead>
            <tr>
              <th style="width: 10px"></th>
              <th style="width: 45px">Name</th>
              <th style="width: 45px">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getApplicant" :key="item.id">
              <td><i class="nav-icon fas fa-user text-lg"></i></td>
              <td> {{item.name}} </td>
              <td> {{item.status}} </td>
            </tr>
          </tbody>
        </table>
	    </div>
	    <div class="card-footer text-center">
	      <a href="/applicant">View All Users</a>
	    </div>
	  </div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  computed: {
    ...mapGetters ({
      getApplicant : 'getApplicant',
    }),
  },
  methods: {
    ...mapActions ({
      fetchApplicant : 'fetchApplicant',
    }),
  },
  created() {
    this.fetchApplicant()
  },
}
</script>