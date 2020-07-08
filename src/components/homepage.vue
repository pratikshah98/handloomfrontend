


<template>
 
 
<div class="main_content" style="width:85%;">
        <div class="info">
        
                <div class="container">
                <span style="margin-left:-1160px; font-size:22px;">PRODUCT</span>
                <br><br>
                          <table class="rwd-table" id="example" style="margin-left:-20px;">
                            <tbody>
                              <tr >
                                <th>product_img</th> 
                                <th>product_name</th> 
                                <th>product_price</th>
                                <th>product_Quantity</th>
                                <th>product_Mfg</th>
                           <!--      <th>product_desc</th> -->
                                    
                                </tr>
                              <tr v-for="item of products">
                            
                                  <td><img v-bind:src="`http://localhost:3000/images/product/${item.product_img}`"  class="tabimg" /> </td>
                                <td data-th="Supplier Name"> {{item.product_name}}</td>
                              <td data-th="Net Amount"> {{item.product_price}}</td>
                              <td data-th="Net Amount"> {{item.product_qty}}</td>
                              <td data-th="Supplier Name"> {{item.product_mfg}} </td>
                            
                           <!--   <td data-th="Supplier Name">Bedsheet </td> -->
                               
      
                              </tr>



                            </tbody>
                          </table>
                          </div>

                          <div class="container">
                
                                <table  class="rwd-table rwd-table1" style="margin-left:-100px;">
                                  <tbody>
                                    <tr >
                                      <th>Category_Id</th>
                                      <th>Category_Name</th>
                                          
                                      </tr>
                                    <tr v-for="item of categorys">
                                      
                                      
                                    <td data-th="Net Amount">{{item.cat_id}}</td>
                                      <td data-th="Supplier Name">{{item.cat_name}} </td>
                                    
                                    </tr>
      
      
                                  </tbody>
                                </table>

                
                                <table  class="rwd-table rwd-table2" style="margin-left:350px; margin-top:-220px;">
                                    <tbody>
                                      <tr >
                                  <th>Customer_Name</th> 
                                 <th>Mobile_No</th> 
                                <th>Date</th> 
                                <th>Total_Amount</th>
                                  
                                        </tr>
                                      <tr v-for="item of bills">
                                          <td data-th="Supplier Name"> {{item.user_name}}</td>
                                          <td data-th="Net Amount">{{item.mobile_no}}</td>
                                          <td data-th="Invoice Date">{{item.date |  formatDate}}</td>
                                          <td data-th="Net Amount">{{item.total_price}}</td>
                           
                                      </tr>
        
        
        
                                    </tbody>
                                  </table>
  
                              </div>

                              <!-- <div class="container">

                               
                                </div> -->

                                </div>



<br><br>

                  
                                <div class="container">
                                 <span style="margin-left:-1160px; font-size:22px; ">USER</span>
                                 <br><br>
                  
                                    <table class="rwd-table" style="margin-left:-100px; margin-top:30px;">
                                      <tbody>
                                        <tr>
                                      
                                      <th>Customer_Name</th> 
                                       <th>Email_Id</th> 
                                       <th>Gender</th> 
                                       <th>Mobile_No</th> 
                                        <th>City</th> 
                                                    
                                      
                                        <tr v-for="item of users">  
                                            <td data-th="Supplier Name"> {{item.user_name}}</td>
                                            <td data-th="Supplier Name"> {{item.email_id}}</td>
                                            <td data-th="Net Amount">{{item.gender}}</td>   
                                            <td data-th="Net Amount">{{item.phoneno}}</td>
                                            <!-- <td data-th="Invoice Date">{{item.city}}</td> -->
                                            <td data-th="Supplier Name"> {{item.city}}</td>
                                         
          
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
import UserService from '../service/userservice';
import BillService from '../service/billservice';

export default {
  name: 'HomePage',
  data () {
    return {
      products:[],
      categorys:[],
      bills:[],
      users:[]
    }
  },
  async created()
  {
      this.products=await ProductService.getProducts();
      this.categorys=await CategoryService.getAllCategory();
      this.users=await UserService.getAllUser();
      this.bills=await BillService.getPosts();
    

     
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @import  '../css/style1.css'
   </style>
