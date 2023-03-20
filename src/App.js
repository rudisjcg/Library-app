import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books'
import { books } from './data'
import Bookinfo from './pages/Bookinfo';
import Cart from './pages/Cart.jsx';
import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(book) {
    setCart([...cart, { ...book, quantity: 1 }])
  }

  function changeQuantity(book, quantity) {
    setCart(cart.map(item => item.id === book.id
      ? {
        ...item,
        quantity: +quantity,
      } : item
    ))
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))

  }

  function numberofItems() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity
    })
    return counter
  }





  useEffect(() => {
  }, [cart])

  return (
    <Router>
      <div className='App'>
        <Nav numberofItems={numberofItems()} />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/books' exact element={<Books books={books} />} />
          <Route path='/books/:id' element={<Bookinfo books={books} addToCart={addToCart} cart={cart} />} />
          <Route path='/cart' element={<Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )

}

export default App;
