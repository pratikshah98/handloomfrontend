<template>
                <div class="info">
                
                        <div class="container">

<div class="form-style-5" style="width:50%;height:40%;">
<form @submit.prevent="onSubmit">

<fieldset>
 <legend>
 <!-- <span class="number"></span> -->
 Forget Passwsord Form</legend>
    <!-- <img src="./user.png" class="viewpro"> -->
   <br><br> 
   <span>Email</span>
<input type="text" name="email_id" placeholder="Enter Your Email *" v-model="email_id">

</fieldset>
<br><br>
<button type="submit" class="button">Done</button></button>
<router-link to="/forgetpassword"><button class="button">Forget Password</button></router-link></button>

</form>
</div>

</div>
</div>
</div> 
 
</template>

<script>
import axios from 'axios';
const url='http://localhost:3000/user/';
const forget='http://localhost:3000/forgetpassword/';
export default {
  name: 'ForgetPassword',
  data () {
    return {
      users:[],
      email_id:'',
      password:''
    }
  },

            methods:
          {
            onSubmit()
            {
                return new Promise(async(resolve,reject)=>{
                      try{
                          const res=await axios.get(url+this.email_id);
                          const data=res.data;
                          this.password=data[0].password; 
                         console.log(this.password)
                          await axios.post(forget,{
                          email_id:this.email_id,
                          password:this.password});
                      }
                      catch(err)
                      {
                          reject(err);
                      }
                  })
              
            }
          }

}
</script>


<style scoped>


  @import  '../css/forget.css'
 </style>
