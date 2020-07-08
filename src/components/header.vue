
<template>
 
 
<div class="wrapper">
    <div class="sidebar">
         <!-- <img src="./JustHandloom (1).png" class="logo"> 
         <h3 style="margin-top:-200px;">JustHandllom</h3> -->
        <h2>Sidebar</h2>
        <ul>
            <li><router-link to="/"><i class="fas fa-home"></i>Home</router-link></li>
            <li><router-link to="/Viewprofile"> <i class="fas fa-home"></i>View Profile</router-link></li>
            <li><router-link to="/Category"><i class="fas fa-list-alt"></i>Category</router-link></li>
            <li><router-link to="/Product"><i class="fas fa-list-alt"></i>Product</router-link></li>
            <li><router-link to="/Bill"><i class="fas fa-receipt"></i>Bill</router-link></li>
            <li><router-link to="/Order"><i class="fas fa-shopping-cart"></i>Order</router-link></li>
            <li><router-link to="/detail"><i class="fas fa-first-order"></i>Order</router-link></li>
           <li><router-link to="/Logout"><i class="fas fa-sign-out-alt"></i>Logout</router-link></li>
       
            <!-- <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
            <li><a href="#"><i class="fas fa-address-card"></i>About</a></li>
            <li><a href="#"><i class="fas fa-project-diagram"></i>portfolio</a></li>
            <li><a href="#"><i class="fas fa-blog"></i>Blogs</a></li>
            <li><a href="#"><i class="fas fa-address-book"></i>Contact</a></li>
            <li><a href="#"><i class="fas fa-map-pin"></i>Map</a></li> -->
        </ul> 
     </div> 
 <div class="main_content">
        <div class="header">DASHBOARD</div>  
       
     <router-view></router-view>
  </div>
  </div>
 </template>

<!-- import '../css/style1.css' -->

<script>
export default {
  name: 'viewprofile',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
        @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');


@import  '../css/style.css'
             
</style>
