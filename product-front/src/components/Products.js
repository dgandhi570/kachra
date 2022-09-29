 import React from 'react'
 import axios from 'axios';
 import { useEffect, useState } from 'react';
import ProductItems from './ProductItems'

const API_URL = "http://127.0.0.1:3000/api/v1/products"

async function getAPIData(){
  const response = await axios.get(API_URL);
  return response.data;
}


 export default function Products({handleChange1}) {

    const [products, setProducts] = useState([])

    const handleChange =()=>{
        console.log("INSIDE PRODUCTS");
    }
    
    useEffect(()=>{
      let mounted = true
      getAPIData().then((items) =>{
          if(mounted){
            setProducts(items)
          }
      });
      return()=> {(mounted = false)}
    }, [])


   return (
     <div className='container'>
       <h1>List of All The Products</h1>
       <div class="row my-3 mx-5">
            {products.map((b,index)=>{
                return  (   
                        <div class="col-sm-6 my-2">
                        <ProductItems handleChange2 ={handleChange} b = {b}/>
                        </div>
                    )
            })}
       </div>
     </div>
   )
 }
 

//  index = {index} id={b.id} name={b.name} brand={b.brand} created_at={b.created_at} url={`http://127.0.0.1:3000/api/v1/products/${b.id}`}