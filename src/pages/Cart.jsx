import React from "react";

const Cart = ({ cart, changeQuantity, }) => {

    const total = (book) => {
        return (
            (book.salePrice || book.originalPrice) * 0.90
        )
    }
    
    const subTotal = () => {

    }

    // sub total is the 90% of the price and the tax is 10%

    return (
        <div id="books__body">
            <main id="books__main">
                <div className="books__container">
                    <div className="row">
                        <div className="book__selected--top">
                            <h2 className="cart__title"></h2>
                        </div>
                        <div className="cart">
                            <div className="cart__header">
                                <span className="cart__book">Book</span>
                                <span className="cart__quantity">Quantity</span>
                                <span className="cart__total">Price</span>
                            </div>
                            <div className="cart__body">

                            {
                                cart.map(book => {
                                    return(
                                        <div className="cart__item">
                                    <div className="cart__book">
                                        <img src={book.url} className="cart__book--img" alt="" />
                                        <div className="cart__book--info">
                                            <span className="cart__book--title">
                                                {book.tittle}
                                            </span>
                                            <span className="cart__book--price">${(book.salePrice || book.originalPrice).toFixed(2)}</span>
                                            <button className="cart__book--remove">Remove</button>
                                        </div>
                                    </div>
                                    <div className="cart__quantity">
                                        <input 
                                        type="number" 
                                        min={0} 
                                        max={99} 
                                        className="cart__input"
                                        value={book.quantity}
                                        onChange={(event) => changeQuantity(book, event.target.value)}
                                        
                                        />
                                    </div>
                                    <div className="cart__total">
                                    ${((book.salePrice || book.originalPrice) * book.quantity).toFixed(2)}
                                    </div>
                                </div>
                                    )
                                })
                            }


                                
                            </div>
                        </div>
                        {
                            cart.map(book => {
                                return (
                                    <div className="total">
                            <div className="total__item total__sub-total">
                                <span>Subtotal</span>
                                <span>${(subTotal())}</span>
                            </div>
                            <div className="total__item total__sub-tax">
                                <span>Tax</span>
                                <span>$9.00 </span>
                            </div>
                            <div className="total__item total__price">
                                <span>Total</span>
                                <span>$9.00 </span>
                            </div>
                            <button className="btn btn__checkout no-cursor" onClick={() => alert('Havent got around to doing this :/')}>Proceed to checkout</button>
                        </div>
                                )
                            })
                            
                        }
                        
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Cart