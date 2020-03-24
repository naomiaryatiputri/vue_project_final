<template>
	<!-- general form elements -->
	<div class="row">
		
		<!-- /.card-image -->
		<div class="col-12 col-lg-3">
    	<!-- Profile Image -->
    	<div class="card card-primary card-outline">
    	  <div class="card-body box-profile">
    	    <div class="text-center">
    	      <img class="profile-user-img img-fluid img-circle"
    	        src="../../assets/img/user8-128x128.jpg"
    	        alt="User profile picture">
    	    </div>
    	    <h3 class="profile-username text-center">Nina Mcintire</h3>
    	    <p class="text-muted text-center">Software Engineer</p>
    	  </div>
    	</div>
		</div>

	
		<div class="col-12 col-lg-9">
			<div class="card card-primary card-outline">
				<div class="card-header">
    	    <div class="card-title text-xl">Profile</div>
    	  </div>
    	  <!-- form 1 -->
				<div class="card-body">
					<div class="form-group">
						<label for="inputName">Name</label>
						<input type="text" class="form-control" v-model="name" placeholder="Enter name">
					</div>
					<div class="form-group">
						<label for="inputEmail">Email</label>
						<input type="text" class="form-control" v-model="email" placeholder="Enter email">
					</div>
					<div class="form-group">
						<label for="inputTelp">Telephone</label>
						<input type="text" class="form-control" v-model="telp" placeholder="Enter telephone">
					</div>
					<div class="form-group">
						<label for="inputAddress">Address</label>
						<input type="text" class="form-control" v-model="address" placeholder="Enter Addres">
					</div>
					<div class="row">
    	      <div class="col-sm-6">
    	        <label for="inputBirth">Gender</label>
    	        <div class="form-group clearfix col">
								<div class="row">
    	          	<div class="icheck-primary d-inline mr-4">
    	          	  <input type="radio" id="male" v-model="gender" name="r1" checked>
    	          	  <label for="male">
											Male
    	          	  </label>
    	          	</div>
    	          	<div class="icheck-primary d-inline">
    	          	  <input type="radio" id="female" v-model="gender" name="r2">
    	          	  <label for="female">
											Female
    	          	  </label>
    	          	</div>
								</div>
    	        </div>
    	      </div>
					</div>
					<div class="form-group">
						<label for="inputBirth">Birth</label>
						<input type="text" class="form-control" v-model="birth" placeholder="Enter birth">
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

			<!-- form 2 -->
			<div class="card card-primary card-outline">
				<div class="card-header">
    	    <div class="card-title text-xl">Occupation</div>
    	  </div>
				<div class="card-body">
					<div class="form-group">
						<label for="inputDepartement">Departement</label>
							<select v-model="depart" class="form-control select2" style="width: 100%;">
            	  <option selected="selected">creative</option>
            	  <option>it</option>
            	  <option>marketing</option>
            	  <option>accounting</option>
            	</select>
					</div>
					<div class="form-group">
						<label for="inputStatus">Status</label>
							<select v-model="statusE" class="form-control select2" style="width: 100%;">
            	  <option selected="selected">permanent</option>
            	  <option>contract</option>
            	  <option>probabation</option>
            	</select>
					</div>
					<div class="form-group">
						<button type="button" class="btn btn-block bg-gradient-success">Add</button>
					</div>
				</div>
			
  		</div>
		</div>	
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	computed: {
			...mapGetters ({
				getDetails: 'getDetails'
			}),
		},
		methods: {
			...mapActions({
				addToDetails : 'addToDetails'
			})
		}
	
}
</script>