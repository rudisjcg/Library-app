import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books'
import {books} from './data'
import Bookinfo from './pages/Bookinfo';
import Cart from './pages/Cart.jsx';
import React, { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [cart, setCart] = useState([]);

  function addToCart(book) {
    const dupeItem = cart.find(item => +item.id === +book.id)
    if (dupeItem) {
      dupeItem.quantity += 1;
      setCart(cart.map(item => {
        if (item.id === dupeItem.id) {
          return{
            ...item,
            quantity: item.quatity + 1,
          }
        }
        else {
          return item
        }
      }))
    }
    else {
      setCart([...cart, {...book, quantity: 1}])
    }
  }

  useEffect(() => {
    console.log(cart)
  }, [cart])

  return (
    <Router>
      <div className='App'>
        <Nav />
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/books' exact element={<Books books={books}/>} />
          <Route path='/books/:id'  element={<Bookinfo books={books} addToCart={addToCart}/>} />
          <Route path='/cart'  element={<Cart books={books}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )

}

export default App;
