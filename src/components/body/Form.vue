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
		                <input type="text" class="form-control" id="inputName" placeholder="Enter name">
		            </div>
		            <div class="form-group">
		                <label for="inputEmail">Email</label>
		                <input type="text" class="form-control" id="inputtext" placeholder="Enter email">
		            </div>
		            <div class="form-group">
		                <label for="inputTelp">Telephone</label>
		                <input type="text" class="form-control" id="inputTelp" placeholder="Enter telephone">
		            </div>
		            <div class="form-group">
		                <label for="inputAddress">Address</label>
		                <input type="text" class="form-control" id="inputAddress" placeholder="Enter Addres">
		            </div>

		            <div class="row">
		                <div class="col-sm-6">
		                    <label for="inputBirth">Gender</label>
		                    <div class="form-group clearfix col">
		                        <div class="row">
		                            <div class="icheck-primary d-inline mr-4">
		                                <input type="radio" id="radioPrimary1" name="r1" checked>
		                                <label for="radioPrimary1">
		                                    Male
		                                </label>
		                            </div>
		                            <div class="icheck-primary d-inline">
		                                <input type="radio" id="radioPrimary2" name="r1">
		                                <label for="radioPrimary2">
		                                    Female
		                                </label>
		                            </div>
		                        </div>
		                    </div>
		                </div>
		            </div>
		            <div class="form-group">
		                <label for="inputBirth">Birth</label>
		                <input type="text" class="form-control" id="inputBirth" placeholder="Enter birth">
		            </div>
		            <!-- Input Image -->
		            <div class="form-group">
		                <label for="exampleInputFile">File input</label>
		                <div class="input-group">
		                    <div class="custom-file">
		                        <input type="file" class="custom-file-input" id="exampleInputFile">
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
		                <select class="form-control select2" style="width: 100%;">
		                    <option selected="selected ">creative</option>
		                    <option>it</option>
		                    <option>marketing</option>
		                    <option>accounting</option>
		                </select>
		            </div>
		            <div class="form-group">
		                <label for="inputName">Status</label>
		                <select class="form-control select2" style="width: 100%;">
		                    <option selected="selected">permanent</option>
		                    <option>contract</option>
		                    <option>probabation</option>
		                </select>
		            </div>
		            <div class="form-group">
		                <button type="button" class="btn btn-block bg-gradient-success">Submit</button>
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
	      	axios.post('http://localhost:3000/employees/', this.form).then(res => {
	        	this.load()
	        	this.form.name=''
	        	this.form.image=''
	        	this.form.telp=''
	        	this.form.email=''
	        	this.form.address=''
	        	this.form.gender=''
	        	this.form.birth=''
	        	this.form.depart=''
	        	this.form.status=''
	      	})
	    },
	}
	
}
</script>