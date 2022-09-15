import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import './app.css';
import ShopProvider from './context/ShopProvider';

function App() {
  return (
    <ShopProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="/detail/:vinylId" element={<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
