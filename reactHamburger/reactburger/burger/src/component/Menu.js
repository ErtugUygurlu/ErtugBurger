import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../styles/Menu.css';
import { Data } from '../helpers/Data';
import MenuItem from './MenuItem';

function Menu() {
  const [cartTotal, setCartTotal] = useState({ totalItems: 0, totalPrice: 0 });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToCart = (price) => {
    setCartTotal({
      totalItems: cartTotal.totalItems + 1,
      totalPrice: cartTotal.totalPrice + price
    });
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    setTimeout(() => {
      setOrderPlaced(false);
      setCartTotal({ totalItems: 0, totalPrice: 0 }); 
    }, 3000);
  };

  const cancelOrder = () => {
    setCartTotal({ totalItems: 0, totalPrice: 0 });
    setOrderPlaced(false);
  };

  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burgerlerimiz</h1>
      <div className='menuList'>
        {Data.map((menuItem, index) => {
          return (
            <MenuItem
              image={menuItem.image}
              name={menuItem.name}
              content={menuItem.content}
              price={menuItem.price}
              key={index}
              addToCart={() => addToCart(menuItem.price)} 
            />
          );
        })}
      </div>
      <div className="cartPanel">
        <FaShoppingCart />
        Sepet Bilgisi: Toplam Ürün: {cartTotal.totalItems}, Toplam Fiyat: {cartTotal.totalPrice} TL
        <p className="checkoutLink" onClick={placeOrder}>Alışverişi Tamamla</p>
        {orderPlaced && <div className="orderPlacedMessage">Siparişiniz alınmıştır.</div>}
        {cartTotal.totalItems > 0 && !orderPlaced && (
          <p className="cancelOrderText" onClick={cancelOrder}>Alışverişi İptal Et</p>
        )}
      </div>
    </div>
  );
}

export default Menu;
