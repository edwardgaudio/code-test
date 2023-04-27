import strawberry from './strawberry.png'
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={strawberry} className="App-logo" alt="logo" />
        <h1>
          Jesse's Product Depot
        </h1>
        <p>git'n you stuff since 1988</p>
      </header>
      <div className='characteristic-picker-container'>
        
      </div>
      <div className='product-list-container'>
        <ProductList />
      </div>
    </div>

  );
}

export default App;
