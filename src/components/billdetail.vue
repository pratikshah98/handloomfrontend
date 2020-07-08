

<template>
 
 
                <div class="info">
               <br>
              <br>
                <div class="container" >
                          <table class="rwd-table" >
                            <tbody >
                              <tr >
                                <!-- <th>Bill_Id</th> --> 
                                <th>Product_Name</th>
                                <th>Image</th>
                                 <th>Quantity</th>
                                <th>Price</th>
                                    
                                </tr>
                              <tr class="post"  v-for="billdetail in billdetails">
                            <!--        <td data-th="Net Amount">{{billdetail.fk_bill_id}}</td> -->
                                 <td data-th="Supplier Name">{{billdetail.product_name}} </td>
                                 <td><img v-bind:src="`http://localhost:3000/images/product/${billdetail.product_img}`"  class="tabimg" /> </td>
                              
                                <!-- <td><img v-bind:src="`../assets/${post.product_img}`"  class="tabimg" /> </td> -->
                                 <td data-th="Net Amount">{{billdetail.qty}}</td>
                                   <td data-th="Net Amount">{{billdetail.price}}</td>
                             
        
      
                              </tr>



                            </tbody>
                          </table>
                          </div>

          
        </div>
    </div>
</div>

</template>

<script>
import BillDetailService from '../service/billdetailservice';

export default {
  name: 'BillDeatail',
  props:['billid'],

   data () {
    return {
        billdetails:[],
        error:'',
        text:'',
 
      }
  },
  async created()
  {
    try{
      this.billdetails=await BillDetailService.getAllBillDetail(this.billid);
      console.log(this.billdetails);
    }
    catch(err)
    {
      this.error=err.message;
    }
  },
   methods:
    {
        async deletePost(id)
        {
                 console.log(id);
     
            await BillService.deletePost(id);
           this.posts=await BillService.getPosts();
        }
    }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  @import  '../css/billdetail.css'
 </style>
