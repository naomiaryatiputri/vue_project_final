<template>
	<div class="col-12 col-lg-6">
  
    
        <!-- Profile Image -->
        <div class="card card-primary card-outline">
            <div class="card-body box-profile">
                <div class="text-center">
                    <img class="profile-user-img img-fluid img-circle" :src="photos()" alt="User profile picture">
                </div>
                <h3 class="profile-username text-center">{{ nama }}</h3>
                <p class="text-muted text-center">{{ title }}</p>
            </div>
            <!-- /.card-body -->
        </div>
        <!-- /.card -->
    
    <div class="card">
      <div class="card-header">
        <button type="button" class="btn btn-success" @click="In()" :disabled="Disable()">In</button>
        <button type="button" class="btn btn-danger" @click="Out()" :disabled="DisableOut()">Out</button>
        
      </div>
    </div>
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
  data(){
      return{
          form: {
            id: '',
            date:'',
            data: [{}]

          },
          disable : false,
          title : '',
          nama : ''
      }
  },
  computed: {
    ...mapGetters ({
      getCalendar : 'getCalendar',
      getAbsence : 'getAbsence',
      getEmployees : 'getEmployees'
    }),
  },
  methods: {
    ...mapActions ({
      fetchCalendar : 'fetchCalendar',
      fetchAbsence : 'fetchAbsence',
      fetchEmployees : 'fetchEmployees'
    }),
    Out(){
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      today = yyyy + '-' + mm + '-' + dd;
      var check = this.getAbsence.filter(ob => ob.date === today)
      var checkuser = check[0].data.filter(ob => ob.user === parseInt(this.$cookies.get('login'), 10))

      for (var i = 0; i < check[0].data.length; i++) {

          if(check[0].data[i].user == parseInt(this.$cookies.get('login'), 10)){
              check[0].data[i].out = time
          }
      }
      
      axios.put('http://localhost:3000/absence/' + check[0].id , check[0]).then(res => {
          alert("Berhasil Check Out")
      }).catch((err) => {
            console.log(err);
        
      })

    },
    In(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        today = yyyy + '-' + mm + '-' + dd;
        var check = this.getAbsence.filter(ob => ob.date === today)
        var d = {}
        d['id']=1
        d['user']=parseInt(this.$cookies.get('login'), 10)
        d['in']=time
        d['out']=''

        if(check.length == 0){
          this.form.date = today
          this.form.data[0]['id'] = 1
          this.form.data[0]['user'] = parseInt(this.$cookies.get('login'), 10)
          this.form.data[0]['in'] = time
          this.form.data[0]['out'] = ''

          axios.post('http://localhost:3000/absence/', this.form).then(res =>{
              alert("Berhasil Check In")
              location.reload()
            })   
        } else {

          check[0].data.push(d)
          
          
          axios.put('http://localhost:3000/absence/' + check[0].id , check[0]).then(res => {
           alert("Berhasil Check In")
          }).catch((err) => {
            console.log(err);
            
          })
        }
    },
    Disable(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        var check = this.getAbsence.filter(ob => ob.date === today)
        if(check.length == 0){
            return false
        } else {
            var checkuser = check[0].data.filter(ob => ob.user === parseInt(this.$cookies.get('login'), 10))
            if(checkuser.length == 0){
                return false
            } else {
                return true
            }
        }
    },
    DisableOut(){
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        var check = this.getAbsence.filter(ob => ob.date === today)
        if(check.length == 0){
            return true
        } else {
            var checkuser = check[0].data.filter(ob => ob.user === parseInt(this.$cookies.get('login'), 10))
            if(checkuser.length == 0){
                return true
            } else {
                if(checkuser[0].out == ''){
                    return false
                } else {
                    return true
                }
            }
        }
    },
    photos(){
        var a = this.getEmployees.filter(ob => ob.id === parseInt(this.$cookies.get('login'), 10))
        this.nama = a[0].name
        this.title = a[0].depart
        return a[0].photo
    }
  },
  created() {
    this.fetchCalendar(),
    this.fetchAbsence(),
    this.fetchEmployees()
  },
}
</script>