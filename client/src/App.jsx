import { useEffect, useState} from 'react';
import ProductCard from "./ProductCard";
import AddProductForm from "./AddProductForm"; 




function App(){

  const [products, setProducts] = useState([]);
  const [view, setView] = useState('list'); 

  async function loadProducts() {
    const response = await fetch('http://localhost:3001/products');
    const data = await response.json();
    setProducts(data);
  }; 


  useEffect(() => {
  
  loadProducts();
}, []);

  return (
view === 'list' ? <> 
    <h1>Pamoja</h1>
    <p>Inventory system</p>
     {products.map((product) => (<ProductCard key={product.id} name = {product.name} price = {product.price}/>))}
     <button onClick={() => setView('form')}>Add Product</button>
     </> :  <AddProductForm onSuccess={()=> {setView('list'); loadProducts()}}/>   
    
  )
}

export default App
