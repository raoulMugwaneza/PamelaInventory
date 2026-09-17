import {useState} from 'react';
import { useEffect} from 'react';



function ProductCard({name, price}){
    const [quantity, setQuantity] = useState(0); 
    useEffect(()=> {console.log(`${name} quantity changed to ${quantity}`)}, [quantity])
  return (
  <div> {name} - {price} - {quantity} <button  onClick = {() => setQuantity(quantity + 1)}>Increase Quantity</button>
  </div>
  

  )
}

export default ProductCard