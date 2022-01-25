import './App.css';
import Menu from './components/Navbar/Menu';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Cart from './components/Cart/cart'
import CartContextProvider from './components/CartContext/CartContext';

function App() {

  //jsx
  return(
    <CartContextProvider>
    <BrowserRouter>
    <div className="App" onClick ={ ()=>console.log() }>
      <h1>Arauca</h1>
      <Menu />
      <Routes>
        <Route exact path='/' element={<ItemListContainer greeting='Bienvenidos a Arauca'/>} />
        <Route exact path='/categoria/:idCategoria' element={<ItemListContainer greeting='Bienvenidos a Arauca'/>} />
        <Route exact path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        <Route exact path='/cart' element={<Cart />} />
      </Routes>
    </div>
    </BrowserRouter>
    </CartContextProvider>
  )
}

export default App;