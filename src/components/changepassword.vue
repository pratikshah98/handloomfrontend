<template>
                <div class="info">
                
                        <div class="container">

<div class="form-style-5">
<form @submit.prevent="onChangePassword">

<fieldset>
 <legend>
 <!-- <span class="number"></span> -->
 Change Passwsord Form</legend>
    <!-- <img src="./user.png" class="viewpro"> -->
   <br><br> 
   <span>Email</span>
<input type="text" name="email_id" placeholder="Enter Your Email *" v-model="email_id">
<span>Old Password</span>
<input type="password" name="password" placeholder="Enter Your Old Password *" v-model="password">
<span>New Password</span>
<input type="password" name="new_password" placeholder="Enter Your New Password *" v-model="new_password">

<span>ReeenterPassword</span>
<input type="password" name="reenter_password" placeholder="Reenter Your Pasword *"  v-model="reenter_password">

</fieldset>
<br><br>
<button  type="submit" class="button" >Done</button></button>
<router-link to="/forgetpassword"><button class="button">Forget Password</button></router-link></button>

</form>
</div>

</div>
</div>
</div> 
 
</template>

<script>
import axios from 'axios';
import UserService from '../service/userservice';
const url='http://localhost:3000/user/';

export default {
  name: 'ChangePassword',
  data () {
    return {
        email_id:'',
        password:'',
        new_password:'',
        reenter_password:'',
        users:[]
    }
  },
async created()
  {
      this.users=await UserService.getAllUser();
    

     
  },
  methods:
  {
      onChangePassword()
      {
          if(this.password==this.users[0].password)
          {
              console.log(this.password)
              console.log(this.users[0].password)
              
                    if(this.new_password==this.reenter_password)
                    {
                         console.log(this.new_password)
                         console.log(this.reenter_password)
                
                            return axios.put(url,{
                            email_id:this.email_id,
                            password:this.new_password

                        })
                            .then(res => {
                            console.log(res)
                               this.$router.push("/viewprofile")
                           
                            if (res.data === 'ok') {
                                console.log(res.data)
                                this.second = true
                            }
                            })
                                            
                            
                            .catch(error => console.log(error))
                  }
                  
                    else
                    {
                        alert('new password and re enter password must be same.')
                    }

          }
          else
          {
          alert('old password must be correct ..')

          }
    

        
      }
  }
}
</script>


<style scoped>


  @import  '../css/forget.css'
 </style>
