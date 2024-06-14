import React, { useEffect, useState } from 'react'
import axios from 'axios';

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts, "allProducts");
   async function GetProducts(){
      // alert("Hi from get product")
      try{
        const response = await axios.get("https://fakestoreapi.com/products");
        // console.log(response.data);
        setAllProducts(response.data)
      } catch(error){
        console.log(error)
      }
   }

  useEffect(()=>{
    // alert("Hiii");
    //api call to backend

    GetProducts();
  }, []);

  return (
    <div>
        <h1>AllProducts</h1>
        <div>
          {allProducts.map((product) => (
            <div style={{width:'24%', height:"450px", border:"1px solid lightgray"}}>
              <img style={{width:"100%", height:"60%",}} src={product.image}/>
              <p>{product.title}</p>
              <p>{product.category}</p>
              <p>Price: {product.price}/-</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default AllProducts;