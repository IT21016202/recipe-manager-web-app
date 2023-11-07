import React, {useState}from 'react'
import Image from '../images/addRecipImg.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const AddRecipe = () => {
    const navigate = useNavigate();

    // States variables to store data
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');

    // Add New Recipe to DB
    function handleSubmit(e){
        e.preventDefault();

        // Check if the user entered all the data
        if(name === '' || description === '' || ingredients === ''){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please Enter All Data !',
              })
              return;
        } 
        const newRecipe = {
            name,
            description,
            ingredients
        }
        axios.post('http://localhost:8000/recipes/add', newRecipe)
        .then((res)=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'New Recipe Added !',
                showConfirmButton: false,
                timer: 1500
              })
            navigate('/')
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div>
        <div style={topicDiv}> 
            <h1 style={topic}>Add New Recipe Here !</h1>
            <p style={subTopic}>In a busy kitchen, an audacious and legendary recipe was born.</p>                
        </div>
        

        <div className='row'>
            <div className='col-md-6'>
                <img src={Image} style={img}></img>
            </div>
            <div className='col-md-6'>
                <form > 
                    <h3 style={formTopic}>Enter Recipe Data Below</h3>
                    <input type='text' className='form-control' placeholder='Recipe Name' required onChange={(e) => setName(e.target.value)} style={inputS}/>
                    <textarea type='text' className='form-control' placeholder='Recipe Description' required rows="3" onChange={(e) => setDescription(e.target.value)} style={inputS}/>
                    <textarea type='text' className='form-control' placeholder='Recipe Ingredients' required rows="3" onChange={(e) => setIngredients(e.target.value)} style={inputS}/>
                    <button className='btn btn-success' onClick={(e) => handleSubmit(e)} style={btn}>Add Recipe</button>
                </form> 
            </div>
        </div>

    </div>
  )
}

const topicDiv = {
    textAlign: 'center',
    marginTop: '10px',
}   

const topic = {
    fontSize: '30px',
}

const subTopic = {
    fontSize: '16px',
}

const formTopic = {
    fontSize: '20px',
    marginBottom: '20px',
    marginTop: '50px',
    textAlign: 'center',  
    marginRight: '50px',      
}

const inputS = {
    marginBottom: '30px',
    width: '80%',
    marginLeft: '20px',
}

const btn = {
    marginLeft: '20px',
    width: '80%',
    fontWeight: 'bold',
    marginBottom: '20px',
}

const  img = {
    width: '50%',
    marginTop: '50px',
    marginLeft: '20%',
    borderRadius: '10px',
}


export default AddRecipe