<template>
 
 
                <div class="info">
                
                        <div class="container">

<div class="form-style-5">
<form @submit.prevent="onEditProfile">

<fieldset>
 <legend>
 <!-- <span class="number"></span> -->
 Edit profile Form</legend>
    <!-- <img src="./user.png" class="viewpro"> -->
   <br>
    
   <span>Name</span>
<input type="text" name="user_name" placeholder="Your Name Is *" v-model="user_name" >
<span>Email</span>
<input type="email" name="email_id" placeholder="Enter Your Email *" v-model="email_id" >
<!-- <span>Password</span>
<input type="password" name="password" placeholder="Enter Your Pasword *" v-model="password" > -->
<!-- <span>ReenterPassword</span>
<input type="password" name="field5" placeholder="Reenter Your Pasword *" value="pratik123"> -->
<br>
<span>Gender</span>
<br>
<label>
                <input type="radio" name="gender" v-model="gender" value="male"> male
                <input type="radio" name="gender" v-model="gender" value="female"> Female
            
</label>
<br>
<span>Address</span><br><br>
<input type="text"  name="address" placeholder="Your Addresss Is *" v-model="address" >

<br>
<span>Phoneno</span>

<input type="number" name="phoneno" placeholder="Enter Your Phoneno *" v-model="phoneno" >
<span>City</span>
<select id="city" name="city"v-model="city" >
  <option v-for="item of city_arr" v-bind:value="item">{{item}}</option>
  
</select>      

</fieldset>
<br><br>

  <button type="submit" class="button" >Done</button>
        
<router-link to="/changepassword"><button class="button">change Password</button></router-link></button>
<router-link to="/forgetpassword"><button class="button"> Forget Password</button></router-link></button>

</form>
</div>

</div>
</div>
</div>

  

</template>

<script>
import UserService from '../service/userservice';
import axios from 'axios';
const url='http://localhost:3000/user/';

export default {
  name: 'EditProfile',
  data () {
    return {
   users:[],
    gender_arr:[]=["male","female"],
    city_arr:[]=["ahmedabad","surat","vadodara","rajkot","morbi","mahesana","patan"],
    
    email_id:'p@gmail.com',
    user_name:'',
    address:'',
    gender:'male',
    phoneno:'',
    city:''
   
    }
  },
  async created()
  {
     return new Promise(async(resolve,reject)=>{
            try{
                const res=await axios.get(url+this.email_id);
                const data=res.data;
                this.email_id=data[0].email_id;
                this.user_name=data[0].user_name;
                this.address=data[0].address;              
                 this.gender=data[0].gender;

                 this.phoneno=data[0].phoneno;
                 this.city=data[0].city;
              
                resolve(
                    data.map( post => ({
                        ...post,
                        createdAt:new Date(post.createdAt)
                    }))
                );
            }
            catch(err)
            {
                reject(err);
            }
        })


     
  },
  methods:
  {
    onEditProfile()
    {
      
            return axios.put(url+this.email_id,{
                email_id:this.email_id,
                user_name:this.user_name,
                password:this.password,
                address:this.address,
                gender:this.gender,
                phoneno:this.phoneno,
                city:this.city
              

              })
          .then(res => {
          console.log(res)
          this.$router.push("viewprofile")
          if (res.data === 'ok') {
            console.log(res.data)
            this.second = true
          }
        })
                           
        
        .catch(error => console.log(error))
    }
        
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  
  @import  '../css/editprofile.css'                  
</style>
