import axios from 'axios';
const url='http://localhost:3000/billdetail/';
class BillDetailService
{
    //Get post
    static getAllBillDetail(bill_id)
    {
        return new Promise(async(resolve,reject)=>{
            try{
                const res=await axios.get(url+bill_id);
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
export default BillDetailService;
