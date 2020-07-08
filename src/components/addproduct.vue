<template>
 
                <div class="info">
                
                        <div class="container">

<div class="form-style-5">
<form @submit.prevent="onSubmit" enctype="multipart/form-data">

<fieldset>
 <legend>
 <!-- <span class="number"></span> -->
 Add Product Form</legend>
    <!-- <img src="./user.png" class="viewpro"> -->
   <br><br> 
    <span>Product Name</span>
<input type="text" name="product_name" placeholder="Enter Product Name *" v-model="product_name" id="product_name" >
<span>File</span>
<br><br>
 <input type="file" name="field2"  value="" class="file1"   @change="onFileSelected">    
   
<br><br>
<span>Price</span>
<input type="number" name="product_price" placeholder="Enter Product Price *"  v-model="product_price" id="product_price">
<span>Product Category</span>
<select id="fk_cat_id" name="fk_cat_id" v-model="fk_cat_id">
    <option class="post" v-for="item in cat_arr"  v-bind:value="item.cat_id">{{item.cat_name}}</option>
  
   </select>      
  <span>Product Qty</span>
<input type="number" name="product_qty" placeholder="Enter Product qty*" value="" v-model="product_qty" id="product_qty"><br>

<span>Product Mfg</span>
<input type="text" name="product_mfg" placeholder="Enter Product Manafecture *" value="" v-model="product_mfg" id="product_mfg">

</fieldset>
<br><br>
 <div class="submit">
          <button type="submit" class="button">Submit</button>
          <button  class="button">cancel</button>
      
        </div>

</form>
</div>

</div>
</div>
</div>


</template>

<script>
import CategoryService from '../service/categoryservice';
import axios from 'axios';
export default {
  
  name: 'AddProduct',
  data () {

    return {
      cat_arr:[],
      
    product_name:'',
    selectedFile:null,
    product_price:'',
    fk_cat_id:'1',
    product_qty:'',
    product_mfg:''

    }
  },
  async created()
  {
    try{
      this.cat_arr=await CategoryService.getAllCategory();
    }
    catch(err)
    {
      this.error=err.message;
    }
  },

    methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
      this.url = URL.createObjectURL(this.selectedFile)
    },
    onUpload () {
      const fd = new FormData()
      fd.append('image', this.selectedFile, this.selectedFile.name)
      axios.post('http...', fd, {
        onUploadProgress: uploadEvent => {
          console.log('Upload Progress ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + ' %')
        }
      })
        .then(res => {
          console.log(res.json)
        })
    },
    onSubmit () {
      const fd = new FormData()          
      fd.append('product_name',this.product_name);
      fd.append('image', this.selectedFile, this.selectedFile.name)
      fd.append('product_price',this.product_price);
      fd.append('fk_cat_id',this.fk_cat_id);
      fd.append('product_qty',this.product_qty);
      fd.append('product_mfg',this.product_mfg);
    console.log(fd)
    console.log(this.product_name)
    console.log(this.product_price)
    console.log(this.fk_cat_id)
    console.log(this.product_qty)
    console.log(this.product_mfg)
    
      axios.post('http://localhost:3000/product/', fd, {
        onUploadProgress: uploadEvent => {
          console.log('Upload Progress ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + ' %')
        }
      })
        .then(res => {
          console.log(res)
          if (res.data === 'ok') {
            console.log(res.data)
            this.second = true
          }
          
         this.$router.push("/product")
        })
                           
        .then(
          setTimeout(function () {
            this.second = false
          }.bind(this), 2000)
        )
        .catch(error => console.log(error))
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  @import  '../css/addproduct.css'
</style>
