<template>
	<div class="col-12 col-lg-6">
    <!-- calendar -->
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Upcoming Events</h3>
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
              <th style="width: 45px">Date</th>
              <th style="width: 45px">Label</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in getCalendar" :key="item.id">
              <td><i class="nav-icon fas fa-calendar text-lg"></i></td>
              <td> {{item.date}} </td>
              <td> {{item.event}} </td>
            </tr>
          </tbody>
        </table>
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
      getCalendar : 'getCalendar',
    }),
  },
  methods: {
    ...mapActions ({
      fetchCalendar : 'fetchCalendar',
    }),
  },
  created() {
    this.fetchCalendar()
  },
}
</script>