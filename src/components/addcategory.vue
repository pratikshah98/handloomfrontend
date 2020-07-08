    <template>
                    <div class="info">
                    
                            <div class="container">

    <div class="form-style-5">
    <form>

    <fieldset>
    <legend>
    <!-- <span class="number"></span> -->
    Add Category Form</legend>
        <!-- <img src="../assets/user.png" class="viewpro"> -->
    <br><br> 
    <span>Category ID</span>
    <input type="number" name="field1" placeholder="Enter Category Id *" value="" v-model="cat_id">

    <span>Category Name</span>
    <input type="text" name="field4" placeholder="Enter Category name *"  value="" v-model="cat_name">

    </fieldset>
    <br><br>
    <router-link to="/addcategory"><button v-on:click="createPost" class="button">Add Category</button></router-link>
    <router-link to="/addcategory"><button class="button">Back</button></router-link>

    </form>
    </div>

    </div>
    </div>
    </div>

    
    </template>

    <script>
    import CategoryService from '../service/categoryservice';

    export default {

    name: 'viewprofile',
    data () {
        return {
                 posts:[],
                error:'',
                cat_id:'',
                cat_name:''
   
         }
    },
    methods:
    {
        async createPost()
        {
            await CategoryService.insertPost(this.cat_id,this.cat_name);
        }
    }

    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
    <style scoped>


  @import  '../css/addcategory.css'                     
    </style>
