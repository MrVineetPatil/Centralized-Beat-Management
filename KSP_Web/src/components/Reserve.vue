<template>
	<v-container>
		<v-card >
			<v-layout row wrap>
			<v-flex class="text-xs-center">
				<br>
				<h4 class="primary--text">Track the Police</h4>
			</v-flex>
		</v-layout>
		<v-layout row wrap>
			<v-flex xs12 sm6 offset-sm3>
				<div>
					<br>	
						<h5>Name: {{Name}}</h5>				
				</div>
				<v-select :items="branches" v-model="branch" ref="branch" label="Select Constable" required>
				</v-select>
	<v-select :items="branches1" v-model="branch1" ref="branch1" label="Select Assignments" required>
				</v-select>
			</v-flex>
		</v-layout>
		<br>
		<v-layout row wrap>
			<v-flex xs12 sm6 offset-sm3>
				<v-date-picker class="hidden-sm-and-down" v-model="date" landscape></v-date-picker>
			</v-flex>
			<v-flex xs12 sm6 offset-xs2 offset-sm3 offset-md3>
				<v-date-picker class="hidden-md-and-up" v-model="date"></v-date-picker>
			</v-flex>
		</v-layout>
		<br>
		<v-layout row wrap>
			<v-flex xs12 sm6 offset-sm3>
				<v-time-picker class="hidden-sm-and-down" v-model="time" landscape></v-time-picker>
			</v-flex>
			<v-flex xs12 sm6 offset-xs2 offset-sm3 offset-md3>
				<v-time-picker class="hidden-md-and-up" v-model="time"></v-time-picker>
			</v-flex>
			<br>
		</v-layout>
		<v-card-actions>
			<v-spacer></v-spacer>
				<v-btn flat color="green"  @click.native.prevent="submitReserve">Submit</v-btn>
		</v-card-actions>

		<div class="mapouter">
  <div class="gmap_canvas">
    <iframe
      id="gmap_canvas"
      width="100%"
      height="400"
	  src="https://www.google.com/maps/ms?msid=204293175747830583907.0005022420ef3bca6a816&msa=0&ie=UTF8&t=m&ll=40.79042,-73.945541&spn=0.462677,1.056747&output=embed"
      
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
    />
  </div>
</div>
			
		</v-card>
		
	
		<!-- <v-layout>
					<v-layout row wrap align-center>
						<v-flex class="text-xs-center">
							<h3>No data</h3>
						</v-flex>
					</v-layout>
				</v-layout> -->
	</v-container>
</template>
<script>
	import {
		ref,
		auth
	} from '../config/firebase'
	
	export default {
		data() {
			return {
				date: null,
				time: null,
				branches: [],
				branches1:[],
				branch: '',
				Name:'',
				uid: '',
				seats: 0,
				type: 4,
				phone: '',
				exist: false
			}
		},
		created() {
			var vm = this;
	
			// auth.onAuthStateChanged(function(user) {
			// 	if (user) {
			// 		self.uid = user.uid;
			// 		console.log(user.uid)
			// 		var vm = self;
			// 		ref.child('users').child(user.uid).once('value', snapshot => {
			// 			var snap = snapshot.val()
			// 			console.log(snap)
			// 			vm.firstName = snap["firstName"]
			// 			vm.lastName = snap["lastName"]
			// 			vm.phone = snap["phone"]
			// 			vm.exist = true
			// 		})
			// 	} else {
			// 		// alert('Please sign in')
			// 		self.$router.push({
			// 			name: 'SignIn'
			// 		});
			// 	}
			// });
			ref.child('Users').once('value', snapshot => {
				var snap = snapshot.val();
				var key = Object.keys(snap);
				console.log(key)
				vm.branches = key;
			})
				ref.child('Assignments').once('value', snapshot => {
				var snap = snapshot.val();
				var key = Object.keys(snap);
				console.log(key)
				vm.branches1= key;
			})
	
			if (this.user !== null) {
				console.log('user')
				ref.child('users').child(this.user).once('value', snapshot => {
					var snap = snapshot.val()
					console.log(snap)
					vm.Name = snap["Name"]
					// vm.lastName = snap["lastName"]
					// vm.phone = snap["phone"]
				})
			}
		},
		methods: {
			submitReserve() {
				var vm = this;
	
				ref.child('Reserves').child(this.user).push({
					Name:vm.Name
					// date: vm.date,
					// time: vm.time,
					// branch: vm.branch,
					// seats: vm.seats,
					// firstName: vm.firstName,
					// lastName: vm.lastName,
					// phone: vm.phone
				}).then(() => {
					alert('Successfully submitted Reserved')
				})
	
			}
		},
		computed: {
			user() {
				return this.$store.getters.user
			}
		}
	}
</script>


<style>
	
</style>