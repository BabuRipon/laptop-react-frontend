import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import {getUserCart} from '../../functions/user'

const CheckoutPage=({history})=>{

    const [products,setProducts]=useState([]);
    const [totalAmount,setTotalAmount]=useState(0);

    const {user}=useSelector(state=>state);

    useEffect(()=>{
        getUserCart(user.token)
        .then(res=>{
           console.log(JSON.stringify(res.data,null,4));
        setProducts(res.data.products);
        setTotalAmount(res.data.cartTotal)
        })
        .catch(err=>{
            console.log(err);
        })

    },[])
    
    const saveAddressToDb=()=>{
        //todo
    }


    return(
        <div className="container mt-3">
        <div className="row">
         <div className="col-sm-6">
             <h4>Delivary Address</h4>
             <br/>
             <br/>
             Text area
             <button className="btn btn-primary mt-2 btn-outline" 
             onClick={saveAddressToDb}
             >Save</button>
             <hr/>
             <h4>Got Coupon ?</h4>
             <br/>
             coupon input and apply button
         </div>
         <div className="col-sm-6">
             <h4>Order Summery</h4>
             <hr/>
             <p>product {products.length}</p>
             <hr/>
             {
                 products.map((p)=>{
                     return(
                         <div key={p._id}>
                            <p>{p.product.title} ({p.color}) x {p.count} = {p.count *p.price}</p>
                        </div>
                     )
                 })
             }
             <hr/>
             <p>Cart Total :{totalAmount}</p>
             <div className="row">
     
                 <div className="col-md-6">
                 <button className="btn btn-primary btn-outline">Place Order</button>
                 </div>
                 
                 <div className="col-md-6">
                 <button className="btn btn-primary btn-outline">Place Order</button>
                 </div>
     
             </div>
         </div>
        </div>
     </div> 
    )
}

export default CheckoutPage;

