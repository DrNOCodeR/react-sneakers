import React from 'react';
import Card from "../components/Card";
import { useCart } from '../hooks/useCart';

function Orders({ items, onAddToFavorite}){
  const {cartItems} = useCart()
  return(
    <div className="content p-40">
      
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои заказы</h1>
      </div>

    <div className="d-flex flex-wrap">
    {cartItems.map((item, index) => 
        <Card key = {index} favorited = {true} onFavorite={onAddToFavorite} {...item}/>
      )}
    </div>
  </div>
  );
}

export default Orders;