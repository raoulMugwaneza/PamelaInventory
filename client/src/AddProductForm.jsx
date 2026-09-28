import {useState} from 'react'; 


function AddProductForm({onSuccess}){

const [formData, setFormData] = useState({name: '', price: ''}); 

    
    async function handleSubmit(event){
        event.preventDefault(); 

        await fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        }); 

    onSuccess(); 


    }
    return <> 
    <form onSubmit = {handleSubmit}> 
        <input value={formData.name} onChange={(e)=> 
        setFormData({...formData, name: e.target.value})
    }/>
        
    
     <input value={formData.price} onChange={(e)=> 
        setFormData({...formData, price: e.target.value})
    }/>
    <button>Add Product</button></form>
    </>

}

export default AddProductForm; 