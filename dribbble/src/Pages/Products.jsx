import React from 'react';
import Heart from "react-animated-heart";
import  { useState, useEffect } from 'react';

const Products = () => {
  const [product, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isClick, setClick] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8080/products`)
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

    
  return (
    <div>
          <div
      style={{
        // display: 'flex',
        // // justifyContent: 'Right',
        // // alignItems: 'Right',
        // height: '100vh'
      }}
    >
       {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="row" style={{display:'grid',gridTemplateColumns:"repeat(3,1fr)",gap:"30px"}}>
          {product.map(product => (
            <div className="products" key={product.id} style={{boxShadow:"1px 2px 9px #F4AAB9",borderRadius:"20px", marginLeft:"10px"}}  >
              <img style={{width:"100%",height:"300px",borderRadius:"20px"}} src= {product.image} alt="" />
              <div  >
              <h4 style={{marginLeft:"10px"}}>{product.name}</h4>
              <p style={{marginLeft:"10px"}}>$ {product.rating}</p>
              <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
    <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>

  );
};
  
export default Products;  