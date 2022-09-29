import React, { useState } from 'react'
import Products from './Products'
import ProductPage from './ProductPage'
import {
    BrowserRouter as Router,
    Route,
    Routes,
  } from 'react-router-dom'


export default function ProductItems({props,handleChange}) {
  console.log("THIS IS PROPS ",props)
  let {b} = props
    const [set,setInput] = useState([])
    
    // let a1 = {
    //   id: id,
    //   name: name,
    //   brand: brand,
    //   url: url
    // }
    const handleChange2 = ()=>{
      
      console.log("INSIDE PRODUCTITEMS")
    }
    
  return (
<>
    <div>
        
    
                            <div className="card text-center">
                                                <div className="card-header">
                                                    ProductId: {id}
                                                </div>
                                    <div className="card-body">
                                            <h5 className="card-title">{name.toUpperCase()}</h5>
                                            <p className="card-text">{brand}</p>
                                            <a href = '/product' className="btn btn-primary" onClick={{handleChange2}}>Show Product</a>
                                            
                                    </div>

                                    <div className="card-footer text-muted">
                                            Added on {created_at}
                                    </div>
                            </div>
                       

    </div>


</>


  )
}
