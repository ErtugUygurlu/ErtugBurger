import React from "react";

function MenuItem({ image, name, content, price, addToCart }) {
    return (
        <div className="menuItem">
            <div style={{ backgroundImage: `url(${image})` }}></div>
            <h1>{name}</h1>
            <h6>{content}</h6>
            <p>
                <i>{price} TL</i>
                <br />
                <hr />
                <br />
                <h1 className="siparis" onClick={addToCart}>{'Sepete Ekle'}</h1>
            </p>
        </div>
    );
}

export default MenuItem;
