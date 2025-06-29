import React from 'react'
import axios from 'axios';
import Info from './Info'
import AppContext from '../context';
import { useCart } from '../hooks/useCart';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve,ms))

const Drawer = ({onClose, onRemove, items = []}) => {
  const {cartItems, setCartItems, totalPrice} = useCart()
  const [isOrderComplete, setIsOrderComplete] = React.useState(false)
  const [OrderId, setOrderId] = React.useState(null);
  const [isLoading, setisLoading] = React.useState(false);

  const onClickOrder = async () => {
    try{
      setisLoading(true)
      setIsOrderComplete(true);
      setCartItems([]);
      for (let i = 0; i < cartItems.length; i++){
        const item = cartItems[i];
        await axios.delete(`https://67b725f22bddacfb270ddfe9.mockapi.io/cart/${item.id}`)
        await delay(1000)
      }
    }
    catch(error){
      
    }
    setisLoading(false)
  }

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">Корзина<img onClick={onClose} className="cu-p" src="img/btn-remove.svg" alt="Close"/></h2>

        {
          items.length > 0 ? 
          <>
            <div className="items">
            {items.map((obj) => (
              <div key={obj.id} className="cartItem d-flex align-center mb-20">
                <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="cardItemImg"></div>
                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price}</b>
                </div>
                <img onClick={() => onRemove(obj.id)} className="removeBtn" src="img/btn-remove.svg" alt="Remove"/>
              </div>   
            ))}                 
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>{totalPrice} руб.</b>
              </li>
              <li className="d-flex">
                <span>Налог 5%:</span>
                <div></div>
                <b>{totalPrice /100*5} руб</b>
              </li>
            </ul>
            <button onClick={onClickOrder} className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
            </button>
          </div>
        </> : (
          <Info 
          title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая" }
          description={isOrderComplete ? "Ваш заказ #1 скоро будет передан курьерской доставке" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
          image={isOrderComplete ? "/img/complete-order.jpg" : "/img/empty-cart.jpg"}/>
        )}
      </div>
    </div>
  )
}

export default Drawer