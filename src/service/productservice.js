import axios from 'axios';
const url='http://localhost:3000/product/';
const probycatname='http://localhost:3000/probycatname/';

class ProductService
{
    static getProducts()
    {
        return new Promise(async(resolve,reject)=>{
            try{
                const res=await axios.get(url);
                const data=res.data;
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
    }
    static getProductById(proid)
    {
        return new Promise(async(resolve,reject)=>{
            try{
                const res=await axios.get(url+proid);
                const data=res.data;
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
    }
 
 
    static getProductsByCategoryName(cat_name)
    {
        return new Promise(async(resolve,reject)=>{
            try{
                const res=await axios.get(probycatname+cat_name);
                const data=res.data;
                console.log(res.data);
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
    }
    //create post
    static insertPosts(cat_id,cat_name)
    {
        return axios.post(url,{
            cat_id,
            cat_name

        });
    }


    // delete category
    static deleteProducts(product_id)
    {
        return axios.delete(`${url}${product_id}`);
    }



    
}
export default ProductService;
