<template>
  <div class="home">
	<div class="splash-container">
		<div class="splash">
			<h1>Splendid Food</h1>
		</div>
		</div>
		<main class="wrapper">
		<h2>Recommended</h2>
		<div class="recommended">
			<ProductCard 
				v-for="(product,index) in inventory.slice(0,3)" 
				:key="product.id" 
				class="card"
				:index="index"
				:product="product"
				:addToCart="addToCart"
			/>
			
		</div>
         </main>
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
// import food from '../food.json'
export default {
  name: 'HomeView',
  props:['inventory','addToCart'],
  components:{
	ProductCard
  }
}
</script>
