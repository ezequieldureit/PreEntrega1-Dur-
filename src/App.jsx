import './App.css';
import Navbar from './components/Navbar';
import CartWidget from './components/CartWidget';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <CartWidget/>
              
      </header>
      <body>
      <h1>
          Bienvenido a mi Ecommerce de productos alimenticios.
        </h1>
      </body>
    </div>
  );
}

export default App;
