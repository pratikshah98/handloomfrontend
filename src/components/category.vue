<template>
  
                <div class="info">
              <br>
              <br>
              <button class="menubtn" style="margin-left:1000px; width:100px;" v-on:click="onAdd()"><i class="fa fa-plus"></i>Add</button>
            <br><br>
<div class="form-style-5" v-if="flag" style="width:50%; height:40%;">
<form @submit.prevent="onAddCategory">

<fieldset>
 <legend>
 <!-- <span class="number"></span> -->
 Add Category Form</legend>
    <!-- <img src="./user.png" class="viewpro"> -->
   <br><br> 
   <span>Category_id</span>
<input type="text" name="cat_id" placeholder="Enter Your Category Id *" v-model="cat_id">
<span>Category Name</span>
<input type="text" name="cat_name" placeholder="Enter Your Category Name *" v-model="cat_name">

</fieldset>
<br><br>
<button class="button" type="submit">Add</button>
<router-link to="/forgetpassword"><button class="button">Forget Password</button></router-link></button>

</form>
</div>





                <div class="container">
                          <table class="rwd-table">
                            <tbody>
                              <tr>
                                <th>category_id</th> 
                                <th>category_name</th> 
                                <th>Action</th>
                                    
                                </tr>
                              <tr v-for="item of categorys">
                                  <!-- <td data-th="Supplier Name">  <input type="checkbox" checked="checked" class="chk1"> -->
                               <td data-th="Net Amount">{{item.cat_id}}</td>
                                <td data-th="Supplier Name">{{item.cat_name}} </td>
                                <td ><button class="btn1" v-on:click="onUpdate(item.cat_id)"><i class="fa fa-plus"></i> update</button>&nbsp;
                                <router-link to="/category"><button class="btn1" v-on:click="onDelete(item.cat_id)"><i class="fa fa-trash"></i> Delete </button></router-link></td>
      
      
                              </tr>



                             </tbody>
                          </table>
                          </div>

          
        </div>
    </div>

  

 
</template>
<!-- require('../css/forget.css');  -->

<script>
import CategoryService from '../service/categoryservice';
import '../css/forget.css';
export default {
  name: 'Category',
  data () {
    return {
      categorys:[],
      cat_id:'',
      cat_name:'',
      flag:false
    }
  },
  async created()
  {
      this.categorys=await CategoryService.getAllCategory();
    },
    methods:
    {
      async onAddCategory()
      {
        if(this.categorys.find(x=>x.cat_name==this.cat_name))
        {
          alert("Category Already Added");
        }
        else
        {
         this.categorys=await CategoryService.insertCategory(this.cat_id,this.cat_name);
         console.log(this.categorys);
         this.categorys=await CategoryService.getAllCategory();
         this.flag=false;
        }
      },
      onAdd()
      {
          if (this.flag)
           {
             this.flag=false;
           } 
          else
           {
            this.flag=true;
          }
      },
       async onDelete(id)
      {
          
                 console.log(id);
     
            await CategoryService.deleteCategorys(id);

              this.categorys=await CategoryService.getAllCategory();
              console.log(this.categorys);
        },
        async onUpdate(id)
        {
          this.$router.push("/updatecategory/"+id);
        }
      }

    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 @import  '../css/style1.css'
 

 </style>
