



<template>
  
 
        <div class="info">
            <ul class="menu" >
                <li><button class="menubtn" v-on:click="onall()">All</button></li>
                <li  v-for="item of categorys" v-on:click="oncatname(item.cat_name)"><button class="menubtn"> {{item.cat_name}}</button>       
               </li>
              </ul>
                <router-link to="/addproduct"><button class="menubtn" style="margin-left:1000px; width:100px;"><i class="fa fa-plus"></i> Add </button></router-link>
                
                <br><br>
                <div class="container">
                          <table class="rwd-table" >
                            <tbody>
                              <tr >
                                <!--  <th>Action</th> -->
                                <th>product_img</th> 
                                <th>product_name</th> 
                                <th>product_price</th>
                                <th>product_qty</th>
                                <th>product_mfg</th>
                                <th>Action</th>
                                    
                                </tr>
                              <tr v-for="(product,index) in products" v-bind:item="product" v-bind:index="index" v-bind:key="product._id">
                            <!--      <td data-th="Supplier Name">  <input type="checkbox" checked="checked" class="chk1"> -->
                                   <td><img v-bind:src="`http://localhost:3000/images/product/${product.product_img}`"  class="tabimg" /> </td>
                                <td data-th="Supplier Name"> {{product.product_name}}</td>
                              <td data-th="Net Amount">{{product.product_price}}</td>
                                <td data-th="Net Amount">{{product.product_qty}} </td>
                               <td data-th="Supplier Name">{{product.product_mfg}} </td>
                             
                                <td ><button class="btn1" v-on:click="onUpdate(product.product_id)"><i class="fa fa-plus"></i> update</button></router-link>&nbsp;
                                <router-link to="/product"><button  v-on:click="deleteProducts(product._id)" class="btn1"><i class="fa fa-trash"></i> Delete </button></router-link></td>
      
                              </tr>



                  
                                </tbody>
                          </table>
                          </div>

          
        </div>
    </div>
</div>

</template>

<script>

import CategoryService from '../service/categoryservice';
import ProductService from '../service/productservice';
export default {
  name: 'ProductComponent',
  data () {
    return {
        products:[],
        error:'',
        text:'',
        categorys:[]
        
      }
  },
  async created()
  {
      this.products=await ProductService.getProducts();
      this.categorys=await CategoryService.getAllCategory();
    

     
  },
  
   methods:
    {
        async deleteProducts(id)
        {
                 console.log(id);
     
            await ProductService.deleteProducts(id);
           this.products=await ProductService.getProducts();
        },
        async onall()
        {
          this.products=await ProductService.getProducts();
      
        },
        async oncatname(cat_name)
        {
          console.log(cat_name)
          this.products=await ProductService.getProductsByCategoryName(cat_name);
    
        },
        onUpdate(proid)
        {
          this.$router.push("/updateproduct/"+proid);
        }
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import  '../css/style1.css'

 </style>
