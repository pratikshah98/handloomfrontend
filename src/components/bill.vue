

<template>
                <div class="info">
               <br>
              <br>
                <div class="container">
                          <table class="rwd-table" >
                            <tbody >
                              <tr>
                                <th>CustomerId</th> 
                                <th>CustomerName</th> 
                                 <th>MobileNo</th> 
                                <th>Date</th> 
                                <th>Total Amount</th>
                                <th>Action</th>
                                    
                                </tr>
                           
                            
                              <tr class="post" v-for="(bill,index) in bills"  >
                                 <td data-th="Supplier Name">  {{bill.email_id}}</td>
                                 <td data-th="Supplier Name">  {{bill.user_name}}</td>
                               
                                <td data-th="Net Amount"> {{bill.phoneno}}</td>
                                <td data-th="Invoice Date">{{bill.date | formatDate}}</td>
                                <td data-th="Net Amount">{{bill.total_price}}</td>
                                
                                     <td ><button class="btn1" v-on:click="OnBillDetail(bill.bill_id)"><i class="fa fa-plus" ></i> BillDetail</button></td>
                         <!--            <td ><button  v-on:click="deletePost(post.bill_id)" class="btn1"><i class="fa fa-plus"></i> Delete</button></router-link></td> -->
                            
                           </tr>    


                              
         
                            </tbody>
                          </table>
                          </div>

          
        </div>
    </div>

</template>

<script>
import BillService from '../service/billservice';

export default {
  name: 'BillComponent',
  data () {
    return {
        bills:[],
        email_id:'',
        user_name:'',
        mobile_no:'',
        date:'',
        total_price:'' 
        
      }
  },
  async created()
  {
    try{
      this.bills=await BillService.getAllBill();
      console.log(this.bills);
    }
    catch(err)
    {
      this.error=err.message;
    }
  },
   methods:
    {
      async OnBillDetail(bill_id)
      {
        this.$router.push("/billdetail/"+bill_id)
      },
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
