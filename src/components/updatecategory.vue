<template>
                <div class="info">
                
                        <div class="container">

<div class="form-style-5" style="width:50%;height:40%;">
<form @submit.prevent="onUpdateCategory">

<fieldset>
 <legend>
 <!-- <span class="number"></span> -->
 Update Category Form</legend>
    <!-- <img src="./user.png" class="viewpro"> -->
   <br><br> 
   <span>Category_Name</span>
<input type="text" name="cat_name" placeholder="Enter Your CategoryName *" v-model="cat_name">

</fieldset>
<br><br>
<button class="button" type="submit">Done</button></button>
<router-link to="/forgetpassword"><button class="button">Forget Password</button></router-link></button>

</form>
</div>

</div>
</div>
</div> 
 
</template>

<script>
import CategoryService from '../service/categoryservice';
import axios from 'axios';
const url='http://localhost:3000/category/';

export default {
  name: 'UpdateCategory',
  props:['id'],
  
  data () {
    return {
    categorys:[],
      cat_id:'',
      cat_name:'',
 
    }
  },
   async created()
     {
       console.log(this.id);
      this.categorys=await CategoryService.getAllCategoryById(this.id);
      this.cat_name=this.categorys[0].cat_name;

    },
    methods:
    {
        onUpdateCategory()
        {
      
            return axios.put(url+this.id,{
               cat_id:this.id,
               cat_name:this.cat_name
              })
          .then(res => {
          console.log(res)
          this.$router.push("/category")
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


<style scoped>


  @import  '../css/forget.css'
 </style>
