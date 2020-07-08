<template>
  <div id="app">
  <Header></Header>

   </div>
</template>

<script>
import ViewProfile from './components/ViewProfile'
import EditProfile from './components/EditProfile'
import Category from './components/Category'
import Product from './components/Product'
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
</style>
