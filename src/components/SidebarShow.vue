<template>
        <aside class="cart-container">
        <div class="cart">
            <h1 class="cart-title spread">
                <span>
                    Cart
                    <i class="icofont-cart-alt icofont-1x"></i>
                </span>
                <button @click="toggle" class="cart-close">&times;</button>
            </h1>
    
            <div class="cart-body">
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th><span class="sr-only">Product Image</span></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th><span class="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(quantity,key,i) in cart" :key="i">
                            <td><i class="icofont-carrot icofont-3x"></i></td>
                            <td>{{ key }}</td>
                            <td>${{ getPrice(key) }}</td>
                            <td class="center">{{ quantity}}</td>
                            <td>${{ quantity * getPrice(key) }}</td>
                            <td class="center">
                                <button class="btn btn-light cart-remove" @click="remove(key)">
                                    &times;
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
    
                <p class="center" v-if="!Object.keys(cart).length"><em>No items in cart</em></p>
                <div class="spread">
                    <span><strong>Total:</strong>${{calculateCartTotal()}}</span>
                    <button lass="btn btn-light">Checkout</button>
                </div>
            </div>
        </div>
    </aside>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default {
    props:[ 'toggle', 'cart', 'inventory','remove'],
      methods:{
         getPrice(name) {
             
         const product = this.inventory.find((p) => {
             // console.log(name)
         return p.name === name
         })
     
             return product.price.USD
       },
        calculateCartTotal(){
         // const names = Object.keys(this.cart)
         // const total = Object.values(this.cart).reduce((acc,curr,index) =>{
         // 	 return acc + (curr * this.getPrice(names[index]))
         //  })
         
         const total = Object.entries(this.cart).reduce((acc,curr,index) =>{
              console.log(index)
             return acc + (curr[1] * this.getPrice(curr[0]))
         },0) //initial value 0 no items in the array
         return total.toFixed(2)
         }
}
}
</script>
