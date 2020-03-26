<template>
  <div class="row col-12 justify-content-center">
    <div class="col-8">
			<div class="card">
  		  <div class="card-body p-0">
  		    <table class="table table-striped">
  		      <thead>
  		        <tr>
  		          <th>Employee</th>
  		          <th v-for="item in date" :key=item.id>{{ item.date }}</th>
  		        </tr>
  		      </thead>
  		      <tbody>
  		        <tr v-for="item in employee" :key=item.id>
  		          <td>Agasta</td>
  	            <td v-for="items in date" :key=item.id><div v-if="check">{{ item.date }}</div></td>
  		        </tr>
  		        
  		      </tbody>
  		    </table>
				</div>
  		  <!-- /.card-body -->
			</div>
		  <div class="row justify-content-between">
				<div>	
					<button type="button" class="btn btn-info btn-sm">Check In</button>
				</div>
				<div>	
					<button type="button" class="btn btn-info btn-sm">Check Out</button>
				</div>
			</div>
    </div>
  </div>
</template>

<script>
 

import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return{
      activeStatus: "permanent"
    }
  },
  props: ['item'],
  computed: {
    ...mapGetters ({
      getAbsence : 'getAbsence',
      getEmployees : 'getEmployees',

    }),
    date() {
      var length = this.getAbsence.length
      var date = []
      var no = 0
      while(no < 5){
          date[no]=this.getAbsence[length-no] 
          no = no + 1
      }
      
      return this.getAbsence.slice(Math.max(this.getAbsence.length - 5, 0))
    },
    employee(){
      return this.getEmployees


    },
    check(){
      return false
    }
  },
  methods: {
    ...mapActions ({
      fetchAbsence : 'fetchAbsence',
      fetchEmployees : 'fetchEmployees',
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
    this.fetchAbsence(),
    this.fetchEmployees()
  },
}
</script>

