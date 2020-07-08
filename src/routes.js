import ViewProfile from './components/ViewProfile'
import EditProfile from './components/EditProfile'
import Category from './components/Category'
import Product from './components/Product'
import Header from './components/Header'
import ForgetPassword from './components/ForgetPassword'
import Bill from './components/Bill'
import Order from './components/Order'
import AddCategory from './components/AddCategory'
import AddProduct from './components/AddProduct'
import BillDetail from './components/billDetail'
import OrderDetail from './components/OrderDetail'
import HomePage from './components/HomePage'
import ChangePassword from './components/ChangePassword'
import UpdateCategory from './components/UpdateCategory'
import UpdateProduct from './components//UpdateProduct'

export default [
    {path:"/",component:HomePage},
    {path:"/viewprofile",component:ViewProfile},
    {path:"/editprofile",component:EditProfile},
    {path:"/category",component:Category},
    {path:"/product",component:Product},
    {path:"/forgetpassword",component:ForgetPassword},
    {path:"/bill",component:Bill},
    {path:"/order",component:Order},
      {path:"/addcategory",component:AddCategory},
    {path:"/addproduct",component:AddProduct},
    {path:"/billdetail/:billid",component:BillDetail,props:true},
    {path:"/orderdetail",component:OrderDetail},
    {path:"/changepassword",component:ChangePassword},
    
    {path:"/updatecategory/:id",component:UpdateCategory,props:true},
    {path:"/updateproduct/:proid",component:UpdateProduct,props:true},
   
];