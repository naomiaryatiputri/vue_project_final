<template>
	<div>
		<div class="col-12 col-lg-9">
			<form @submit.prevent="add">
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
	              
		                <input type="date" class="form-control" id="date" v-model="form.birth">

		            </div>
		            <div class="form-group">
		              <label>To</label>
		                <input type="date" class="form-control" id="date" v-model="form.birth">
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
// import { mapGetters, mapActions } from 'vuex'
// import axios from 'axios'
export default {
	data(){
	    return{
	        form: {
	          id: '',
	          name: '',
	          image : '',
	          telp : '',
	          email : '',
	          address : '',
	          gender: '',
	          birth: '',
	          depart: '',
	          status: '',
	        }
	    }
	},
	// computed: {
	// 	...mapGetters ({
	// 		getDetails: 'getDetails'
	// 	}),
	// },
	// methods: {
	// 	...mapActions({
	// 		addToDetails : 'addToDetails'
	// 	}),
	// 	add(){

	//     axios.post('http://localhost:3000/employees/', this.form).then(res =>{
	//     	alert("Data Berhasil Dimasukkan")
	//       this.form.name = ''
	//       this.form.image = ''
	//       this.form.telp = ''
	//       this.form.email = ''
	//       this.form.address = ''
	//       this.form.gender = ''
	//       this.form.birth = ''
	//       this.form.depart = ''
	//       this.form.status = ''      
	// 		})
			
	//   },
	// }
	
}
</script>