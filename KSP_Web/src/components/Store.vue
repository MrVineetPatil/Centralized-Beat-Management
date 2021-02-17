<!--
<template>
	<v-container fluid  grid-list-xl>
		<br>
			<v-layout row wrap justify-center>
				<v-flex sm6 md3 lg3 v-for="(prod, idx) in menuList" :key="prod.id">
						<app-menu-item :item="prod" :key="idx" :uid="user" :name="prod.menuName" ></app-menu-item>
				</v-flex>
			</v-layout>
	</v-container>
</template>


<template>
  <v-card
    max-width="2000"
    class="mx-auto"
  >
    <v-toolbar color="indigo" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Constable List</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        @click="false"
      >
        <v-list-item-icon>
          <v-icon v-if="item.icon" color="pink"></v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-avatar>
          <v-img :src="item.avatar"></v-img>
        </v-list-item-avatar>
         <v-btn small color=#6CE7CF>Track</v-btn>
         <v-btn small color=#6CE7CF>Assign</v-btn>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },
        ],
      }
    },
  }
</script>
<!--
<script>
	import { ref, auth } from '../config/firebase'
	import StoreItem from './StoreItem.vue'

	export default{
		components: {
			appMenuItem: StoreItem,
			menuList:[ { title: 'Jason Oner', avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg' },
          { title: 'Travis Howard', avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg' },
          { title: 'Ali Connors', avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg' },
          { title: 'Cindy Baker', avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg' },]
		
		}
		// ,
		// data(){
		// 	return{
		// 		displayList: true,
		// 		uid: ''
		// 	}
		// },
		// firebase: {
		// 	menuList: ref.child('Menu')
		// },
		// computed: {
		// 	user(){
		// 		return this.$store.getters.user
		// 	}
		// }
//		},
//		created(){
//			var vm = this;
//			ref.child('Menu').once('value', snapshot => {
//				vm.products = snapshot.val()
//				var key = Object.keys(snapshot.val())
//				console.log(key)
//			})
//			console.log(this.products)
//		}
	}
</script>

<style scoped>

</style>

-->
<template>
	<v-container fluid  grid-list-xl>
		<br>
			<v-layout row wrap justify-center>
				<v-flex sm6 md3 lg3 v-for="(prod, idx) in menuList" :key="prod.id">
						<app-menu-item :item="prod" :key="idx" :uid="user" :name="prod.menuName" ></app-menu-item>
				</v-flex>
			</v-layout>
	</v-container>
</template>

<script>
	import { ref, auth } from '../config/firebase'
	import StoreItem from './StoreItem.vue'
	export default{
		components: {
			appMenuItem: StoreItem
		},
		data(){
			return{
				displayList: true,
				uid: ''
			}
		},
		firebase: {
			menuList: ref.child('Users')
		},
		computed: {
			user(){
				return this.$store.getters.user
			}
		}
//		},
//		created(){
//			var vm = this;
//			ref.child('Menu').once('value', snapshot => {
//				vm.products = snapshot.val()
//				var key = Object.keys(snapshot.val())
//				console.log(key)
//			})
//			console.log(this.products)
//		}
	}
</script>

<style scoped>
</style>