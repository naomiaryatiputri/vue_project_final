<template>
	<div class="row">

		<!-- /.card-image -->
		<div class="col-12 col-lg-3">
		    <!-- Profile Image -->
		    <div class="card card-primary card-outline">
		        <div class="card-body box-profile">
		            <div class="text-center">
		                <img class="profile-user-img img-fluid img-circle" src="../../assets/img/user8-128x128.jpg" alt="User profile picture">
		            </div>
		            <h3 class="profile-username text-center">Nina Mcintire</h3>
		            <p class="text-muted text-center">Software Engineer</p>
		        </div>
		        <!-- /.card-body -->
		    </div>
		    <!-- /.card -->
		</div>
		
		<div class="col-12 col-lg-9">
			<form @submit.prevent="add">
		    <div class="card card-primary card-outline">
		        <div class="card-header">
		            <div class="card-title text-xl">Profile</div>
		        </div>

		        <!-- /.card-header -->

		        <div class="card-body">
		            <div class="form-group">
		                <label for="inputName">Name</label>
		                <input type="text" class="form-control" id="inputName" name="name" placeholder="Enter name" v-model="form.name">
		            </div>
		            <div class="form-group">
		                <label for="inputEmail">Email</label>
		                <input type="text" class="form-control" id="inputtext" name="email" placeholder="Enter email" v-model="form.email">
		            </div>
		            <div class="form-group">
		                <label for="inputPassword">Password Login</label>
		                <input type="password" class="form-control" id="inputtext" name="password" placeholder="Enter password" v-model="form.password">
		            </div>
		            <div class="form-group">
		                <label for="inputTelp">Telephone</label>
		                <input type="number" class="form-control" id="inputTelp" name="telp" placeholder="Enter telephone" v-model="form.telp">
		            </div>
		            <div class="form-group">
		                <label for="inputAddress">Address</label>
		                <input type="text" class="form-control" id="inputAddress" name="address" placeholder="Enter Address" v-model="form.address">
		            </div>

		            <div class="row">
		                <div class="col-sm-6">
		                    <label for="inputBirth">Gender</label>
		                    <div class="form-group clearfix col">
		                        <div class="row">
		                            <div class="icheck-primary d-inline mr-4">
		                                <input type="radio" id="radioPrimary1" name="gender" checked value="male" v-model="form.gender">
		                                <label for="radioPrimary1">
		                                    Male
		                                </label>
		                            </div>
		                            <div class="icheck-primary d-inline">
		                                <input type="radio" id="radioPrimary2" name="gender" value="female" v-model="form.gender">
		                                <label for="radioPrimary2">
		                                    Female
		                                </label>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div class="form-group">
		              <label>Birth</label>

		              
		                <input type="date" class="form-control" id="date" v-model="form.birth">
		              
		              <!-- /.input group -->
		            </div>

		            <!-- Input Image -->
		            <div class="form-group">
		                <label for="exampleInputFile">File input</label>
		                <div class="input-group">
		                    <div class="custom-file">
		                        <input type="file" class="custom-file-input" id="customFile" name="image">
		                        <label class="custom-file-label" for="exampleInputFile">Choose file</label>
		                    </div>
		                    <div class="input-group-append">
		                        <span class="input-group-text" id="">Upload</span>
		                    </div>
		                </div>
		            </div>
		        </div>
		    </div>

		    <div class="card card-primary card-outline">
		        <div class="card-header">
		            <div class="card-title text-xl">Occupation</div>
		        </div>
		        <div class="card-body">
		            <div class="form-group">
		                <label for="inputName">Departement</label>
		                <select class="form-control select2" style="width: 100%;" v-model="form.depart">
		                    <option selected="selected ">creative</option>
		                    <option>it</option>
		                    <option>marketing</option>
		                    <option>accounting</option>
		                </select>
		            </div>
		            <div class="form-group">
		                <label for="inputName">Status</label>
		                <select class="form-control select2" style="width: 100%;" v-model="form.status">
		                    <option selected="selected">permanent</option>
		                    <option>contract</option>
		                    <option>probabation</option>
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
	          password:''
	        }
	    }
	},
	computed: {
		...mapGetters ({
			getDetails: 'getDetails'
		}),
	},
	methods: {
		...mapActions({
			addToDetails : 'addToDetails'
		}),
		add(){

	      	axios.post('http://localhost:3000/employees/', this.form).then(res =>{
	      		alert("Data Berhasil Dimasukkan")
		        this.form.name = ''
		        this.form.image = ''
		        this.form.telp = ''
		        this.form.email = ''
		        this.form.address = ''
		        this.form.gender = ''
		        this.form.birth = ''
		        this.form.depart = ''
		        this.form.status = ''
		        this.form.password = ''

	      	})
	    },
	}
	
}
</script>