import axios from 'axios';
const url='http://localhost:3000/category/';
class CategoryService
{
    static getAllCategory()
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


    static getAllCategoryById(cat_id)
    {
        return new Promise(async(resolve,reject)=>{
            try{
                const res=await axios.get(url+cat_id);
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
 
    //create post
    static insertCategory(cat_id,cat_name)
    {
        return axios.post(url,{
            cat_id,
            cat_name

        });
    }


    // delete category
    static deleteCategorys(cat_id)
    {
        return axios.delete(`${url}${cat_id}`);
    }



    
}
export default CategoryService;
