<template>
	<div class="row">
		
		<div class="col-12 col-lg-9">
			<form @submit.prevent="add">
		    <div class="card card-primary card-outline">
		        <div class="card-header">
		            <div class="card-title text-xl">Next Event</div>
		        </div>

		        <div class="card-body">
		            <div class="form-group">
		                <label for="inputName">Name Event</label>
		                <input type="text" class="form-control" id="inputNameEvent" name="event" placeholder="Enter next event" v-model="form.event">
		            </div>
		            <div class="form-group">
		              <label>Date</label>
		                <input type="date" class="form-control" id="date" v-model="form.date">
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
	          event: '',
	          date : ''
	        }
	    }
	},
	computed: {
		...mapGetters ({
			getCalendar: 'getCalendar'
		}),
	},
	methods: {
		...mapActions({
			// addToDetails : 'addToDetails'
		}),
		add(){
	    axios.post('http://localhost:3000/calendar/', this.form).then(res =>{
	    	alert("Data Event Berhasil Dimasukkan")
		    this.form.event = ''
		    this.form.date = ''
	    })
	  },
	}
	
}
</script>