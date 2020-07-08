import axios from 'axios';
const url='http://localhost:3000/bill/';
class BillService
{
    //Get post
    static getAllBill()
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

    static deletePost(id)
    {
        return axios.delete(`${url}${id}`);
    }

    //post method
}
export default BillService;
