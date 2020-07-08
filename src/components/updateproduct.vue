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
import ProductService from '../service/productservice';
const url='http://localhost:3000/product/';

import axios from 'axios';
export default {
  
  name: 'AddProduct',
    props:['proid'],

  data () {

    return {
      cat_arr:[],
      products:[],
    product_name:'',
    selectedFile:null,
    product_price:'',
    fk_cat_id:'1',
    product_qty:'',
    product_mfg:'',
    product_id:'',
    flag:false
    }
  },
 
 async created()
  { 
         this.cat_arr=await CategoryService.getAllCategory();
  
      return new Promise(async(resolve,reject)=>{
            try{
                const res=await axios.get(url+this.proid);
                const data=res.data;
                console.log(data);
                this.product_id=data[0].product_id;
              
             this.product_name=data[0].product_name;
                this.product_img=data[0].product_img;
                this.product_price=data[0].product_price;              
                 this.fk_cat_id=data[0].fk_cat_id;

                 this.product_qty=data[0].product_qty;
                 this.product_mfg=data[0].product_mfg;
              
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
  

    methods: {
    onFileSelected (event) {
      this.flag=true;
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
      if(this.flag)
      {
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
              
                axios.put('http://localhost:3000/updateproduct/'+this.proid, fd, {
                  onUploadProgress: uploadEvent => {
                    console.log('Upload Progress ' + Math.round(uploadEvent.loaded / uploadEvent.total * 100) + ' %')
                  }
                })
                  .then(res => {
                    console.log(res)
                    if (res.data === 'ok') {
                      console.log(res.data)
                      this.second = true
                      alert('updated succesfully..')
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
         else
         {
                    return axios.put(url+this.product_id,{
                        product_name:this.product_name,
                        product_img:this.product_img,
                        fk_cat_id:this.fk_cat_id,
                        product_qty:this.product_qty,
                        product_price:this.product_price
                        })
                      .then(res => {
                      console.log(res)
                                
                      this.$router.push("/product")
                      if (res.data === 'ok') {
                        console.log(res.data)
                      this.second = true
                       alert('updated succesfully..')
           
                    }
                  })
                                    
                  
                  .catch(error => console.log(error))
          }
    }
  }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


  @import  '../css/addproduct.css'
</style>
