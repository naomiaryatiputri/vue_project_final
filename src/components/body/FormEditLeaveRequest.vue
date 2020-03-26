<template>
	<div class="row">
		<div class="col-12 col-lg-9">
			<form @submit.prevent="update">
		    <div class="card card-primary card-outline">

		        <div class="card-body">
		            <div class="form-group">
		                <label for="inputName">Name</label>
		                <input type="text" class="form-control" id="inputname" name="name" placeholder="Enter name" v-model="form.name">
		            </div>
		            <div class="form-group">
		                <label for="inputEmail">Email</label>
		                <input type="text" class="form-control" id="inputemail" name="email" placeholder="Enter email" v-model="form.email">
		            </div>
		            <div class="form-group">
		                <label for="inputTelp">Telephone</label>
		                <input type="text" class="form-control" id="inputtelp" name="telp" placeholder="Enter Telephone" v-model="form.telp">
		            </div>
	            	<div class="form-group">
		              <label>Start</label>
		                <input type="date" class="form-control" id="dateStart" v-model="form.start">
		            </div>
		            <div class="form-group">
		              <label>To</label>
		                <input type="date" class="form-control" id="dateTo" v-model="form.to">
		            </div>
		            <div class="form-group">
		                <label for="inputName">Status</label>
		                <select class="form-control select2" style="width: 100%;" v-model="form.status">
		                    <option selected="selected">pending</option>
		                    <option>approve</option>
		                    <option>reject</option>
		                </select>
		            </div>								
								<div class="form-group">
		                <button type="submit" class="btn btn-block bg-gradient-success">Submit</button>
		            </div>
		        </div>
		    </div>
		  </form>
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
	          name: '',
	          telp : '',
						email : '',
						start : '',
						to : '',
	          status: '',
	        },
	    }
	},
	computed: {
		...mapGetters ({
			getDetails: 'getDetails'
		}),
	},
	mounted: function () {
        this.load()
    },
	methods: {		
	  load(){
        axios.get('http://localhost:3000/leave-request?id='+this.$route.params.id).then(res => {
        this.form.name = res.data[0].name
        this.form.telp = res.data[0].telp
				this.form.email = res.data[0].email
				this.form.start = res.data[0].start
				this.form.to = res.data[0].to
        this.form.status = res.data[0].status
      }).catch ((err) => {
        alert("error")
      })
    },
    update(form){ 
       return axios.put('http://localhost:3000/leave-request/' + this.$route.params.id , this.form).then(res => {
       alert("Data Berhasil diupdate")
      }).catch((err) => {
        console.log(err);
      })
    }
	}	
}
</script>