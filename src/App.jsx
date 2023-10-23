import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';



function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route exact path='/' element={< ItemListContainer />} />
        <Route exact path='/product/:id' element={< ItemDetailContainer />} />
        <Route exact path='/categoria/:categoria' element={< ItemListContainer />} />
        <Route exact path='/cart' element={< Cart/>} />




      </Routes>


    </BrowserRouter>



  )
}

export default App
