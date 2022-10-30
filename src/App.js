import './App.css';
import NavBar from './components/NavBar';
import Body from './components/Body';
import ItemListConteiner from './components/ItemListConteiner';

function App() {
  return (
    <>
      <NavBar/>
      <Body/>
      <ItemListConteiner mensaje="Producto 1"/> 
    </>
  );
}

export default App;
