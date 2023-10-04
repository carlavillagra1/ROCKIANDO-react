import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (

    <div>
      <Navbar />
      <ItemListContainer greeting={"Bienvenido a rockiando sport"} />
    </div>

  )
}

export default App
