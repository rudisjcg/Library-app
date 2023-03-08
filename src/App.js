import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Books from './pages/Books'
import {books} from './data'
import Bookinfo from './pages/Bookinfo';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/books' exact element={<Books books={books}/>} />
          <Route path='/books/:id'  element={<Bookinfo books={books}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )

}

export default App;
