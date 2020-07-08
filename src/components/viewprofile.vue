<template>

                <div class="info">
                
                        <div class="container">

<div class="form-style-5" >
<form >

<fieldset >
 <legend v-for="item of users">
 <!-- <span class="number"></span> -->
 View profile Form</legend>

    <img src="../assets/user.png" class="viewpro">
   <br><br> 
   <span>Name</span>
<input type="text" name="user_name" placeholder="Your Name Is *" v-model="user_name" disabled="true">
<span>Email</span>
<input type="email" name="email_id" placeholder="Enter Your Email *" v-model="email_id" disabled="true">
<span>Password</span>
<input type="password" name="password" placeholder="Enter Your Pasword *" v-model="user_name" disabled="true">
<!-- <span>ReEnterPassword</span>
<input type="password" name="field5" placeholder="Reenter Your Pasword *" disabled="true"><br> -->
<span>Gender</span>
<br>

<!-- <input type="radio" name="gender"> <span class="gen" disabled="true" v-for="item of gender_arr">{{item}}</span> -->

<label>
                <input type="radio" name="gender" v-model="gender" value="male"> male
                <input type="radio" name="gender" v-model="gender" value="female"> Female
            
</label>
<br>
<span>Address</span><br><br>
<input type="text"  name="address" placeholder="Your Addresss Is *" v-model="address" disabled="true">
<br><br>
<span>Phoneno</span>

<input type="number" name="phoneno" placeholder="Enter Your Phoneno *" v-model="phoneno" disabled="true">
<span>City</span>
<select id="city" name="city"v-model="city" disabled="true">
  <option v-for="item of city_arr">{{item}}</option>
  
</select>      

</fieldset>

<router-link to="/editprofile"><button class="button">Edit Profile</button></router-link></button>
<router-link to="/forgetpassword"><button class="button">Forget Password</button></router-link></button>

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
  name: 'viewprofile',
  data () {
    return {
    users:[],
    gender_arr:[]=["male","female"],
    city_arr:[]=["ahmedabad","surat","vadodara","rajkot","morbi","mahesana","patan"],
    
    email_id:'p@gmail.com',
    user_name:'',
    password:'',
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
                this.password=data[0].password; 
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
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@import  '../css/viewprofile.css'
                
</style>
