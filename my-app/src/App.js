import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import './app.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
      <Route path="/detail/:vinylId" element={<ItemDetailContainer/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
