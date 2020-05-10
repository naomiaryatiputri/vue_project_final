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

  		        <tr v-if="check" v-for="item in employee" :key=item.id>
  		          <td>{{ item.name }}</td>
  	            <td v-for="items in date" :key=items.id><div v-if="test(item.id,items.date)">{{ checkin }}</div></td>
  		        </tr>
              <tr v-if="!check" v-for="item in employee" :key=item.id>
                <td>{{ item.name }}</td>
                <td v-for="items in date" :key=items.id><div v-if="test(item.id,items.date)">{{ checkout }}</div></td>
              </tr>
  		        
  		      </tbody>
  		    </table>
				</div>
  		  <!-- /.card-body -->
			</div>
		  <div class="row justify-content-between">
				<div>	
					<button type="button" @click="In()" class="btn btn-info btn-sm">Check In</button>
				</div>
				<div>	
					<button type="button" @click="Out()" class="btn btn-info btn-sm">Check Out</button>
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
      activeStatus: "permanent",
      checkin : '20',
      checkout : '20',
      check : true
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
    },
    test(id,date){
        this.checkin = 'Absen'
        this.checkout = 'Absen' 
        var abc = this.getAbsence.filter(ob=>ob.date === date)
        var check = abc[0].data.filter(ob=>ob.user === id)
        if(check.length == 1){
          this.checkin = check[0].in
          this.checkout = check[0].out
          
        } 
        
        return true
    },
    In(){
    this.check = true
    },
    Out(){
    this.check = false
    }
  },
  created() {
    this.fetchAbsence(),
    this.fetchEmployees()
  },
}
</script>

