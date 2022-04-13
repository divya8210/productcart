<template>
	<header class="top-bar spread">
		<nav class="top-bar-nav">
			<router-link to="/" class="top-bar-link">
				<i class="icofont-spoon-and-fork"></i>
				<span>Home</span>
			</router-link>
			<router-link to="/ProductsPage" class="top-bar-link">
				<span>Products</span>
			</router-link>
			<router-link to="past-orders" class="top-bar-link">
				<span>Past Orders</span>
			</router-link>
		</nav>
		<router-link @click="toggleSidebar" class="top-bar-cart-link">
			<i class="icofont-cart-alt icofont-1x"></i>
			<span>Cart ({{ totalQuantity}})</span>
		</router-link>
	</header>
			<!-- <nav>
				<router-link to="/">Home</router-link> |
				<router-link to="/about">About</router-link>
			</nav> -->
	<router-view  :inventory="inventory"/>
	<SidebarShow
		v-if="showSidebar" 
		:toggle="toggleSidebar"
		:cart ="cart"
		:inventory="inventory"
		:remove = "removeItem"
	/>
</template>


<script>
import SidebarShow from '@/components/SidebarShow.vue'
import food from './food.json'

export default{
	props: [
		'inventory'
	],
	components: {
		SidebarShow
	},
	data() {
		return {
			showSidebar : true,
			inventory : food,
			cart:{}
		}
	 },
	
	computed:{
	 totalQuantity() {
	 return Object.values (this.cart).reduce((acc,curr) => {
		 return acc + curr
	 }, 0)
	 }        
  },
  methods: {
	  	addToCart(name,index) {
		  if(!this.cart[name])
			this.cart[name] = 0
			this.cart[name] += this.inventory[index].quantity
			this.inventory[index].quantity = 0 //set cart value to 0
			 //    console.log(this.cart)
	 	 },
	  	toggleSidebar(){
		  this.showSidebar=!this.showSidebar
	 	 },
	 	 removeItem(name){
		  console.log(name)
		  delete this.cart[name]
	  	}
	},
}
</script>
