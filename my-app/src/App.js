import NavBar from './components/NavBar';
import './App.css';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer mensaje={"ALOH"}/>
    {/* <div className="App">
    </div> */}
    </>
  );
}

export default App;
