import { useEffect, useState} from 'react';
import ProductCard from "./ProductCard";



function App(){

  const [products, setProducts] = useState([]);


  useEffect(() => {
  async function loadProducts() {
    const response = await fetch('http://localhost:3001/products');
    const data = await response.json();
    setProducts(data);
  }
  loadProducts();
}, []);

  return (
    <> 
    <h1>Pamoja</h1>
    <p>Inventory system</p>
    {products.map((product) => (<ProductCard key={product.id} name = {product.name} price = {product.price}/>))}
    </>
  )
}

export default App
