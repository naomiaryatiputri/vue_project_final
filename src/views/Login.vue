<template>
	<div>
		<body class="hold-transition login-page">
		<div class="login-box">
		  <div class="login-logo">
		    <a href="/home"><b>Vue HR Portal</b></a>
		  </div>
		  <!-- /.login-logo -->
		  
		  <div class="card">
		    <div class="card-body login-card-body">
		      <p class="login-box-msg">Sign in to start your session</p>
					<form @submit.prevent="logIn()">
					  <div class="input-group mb-3">
					    <input type="email" class="form-control" placeholder="Email" v-model="user.email">
					    <div class="input-group-append">
					      <div class="input-group-text">
					        <span class="fas fa-envelope"></span>
					      </div>
					    </div>
					  </div>
					  <div class="input-group mb-3">
					    <input type="password" class="form-control" placeholder="Password" v-model="user.password">
					    <div class="input-group-append">
					      <div class="input-group-text">
					        <span class="fas fa-lock"></span>
					      </div>
					    </div>
					  </div>
					  <div class="row">
					    <div class="col-8">
					      <div class="icheck-primary">
					        <input type="checkbox" id="remember">
					        <label for="remember">
					          Remember Me
					        </label>
					      </div>
					    </div>
					    <!-- /.col -->
					    <div class="col-4">
					      <button type="submit" class="btn btn-primary btn-block">Sign In</button>
					    </div>
					    <!-- /.col -->
					  </div>
					</form>
		    </div>
		  </div>
		  
		</div>
		</body>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import axios from 'axios'
	export default {
	  data() {
	    return {
	      user: {
	        email: '',
	        password: ''
	      },
	      loginError: false,
	    }
	  },
	  methods: {
	    logIn() {
	      
          axios.get('http://localhost:3000/employees?email='+this.user.email+'&password='+this.user.password).then(res => {
			if(typeof res.data[0] !== 'undefined'){
				this.$cookies.set('login', res.data[0].id, '23h');
				this.$router.push({
				  name: 'home'
				});
			} else {
				alert("email atau password salah");
			}
	      }).catch ((err) => {
            alert("email atau pword salah")
            
          })

	      
	    }
	  },
	  computed: {
	    ...mapGetters({
	      getEmployees : 'getEmployees',
	    }),
	  },
	  beforeRouteEnter(to, from, next) {
	    $cookies.get('login') ? next({
	      name: 'home'
	    }) : next()
	  },
	}
</script>