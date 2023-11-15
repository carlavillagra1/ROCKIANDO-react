import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Form from './components/Form';
import { CartProvider } from './context/CartContext';
import Nosotros from './components/nosotros';
import Entregas from './components/Entregas';



function App() {

  return (

    <BrowserRouter>
    <CartProvider>
      <Navbar />

      <Routes>

        <Route exact path='/' element={< ItemListContainer />} />
        <Route exact path='/producto/:id' element={< ItemDetailContainer />} />
        <Route exact path='/categoria/:categoria' element={< ItemListContainer />} />
        <Route exact path='/cart' element={< Cart/>} />
        <Route exact path='/form' element={< Form/>} />
        <Route exact path='/nosotros' element={< Nosotros/>} />
        <Route exact path='/entregas' element={< Entregas/>} />


      </Routes>

      </CartProvider>
    
    </BrowserRouter>



  )
}

export default App
