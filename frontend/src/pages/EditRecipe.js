import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Image from '../images/editRecipe.jpg';
import axios from 'axios';
import Swal from "sweetalert2";

const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // States variables to store data
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [ingredients, setIngredients] = useState('');

    // Get One Recipe Data from DB
    useEffect(() => {
        axios.get(`http://localhost:8000/recipes/${id}`)
        .then(res => {
            setName(res.data.data.name);
            setDescription(res.data.data.description);
            setIngredients(res.data.data.ingredients);
        })
        .catch(err => console.log(err));
    }, []);

    // Update Recipe
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
        
        const updatedRecipe = {
            name,
            description,
            ingredients
        }
        axios.patch(`http://localhost:8000/recipes/update/${id}`, updatedRecipe)
        .then((res)=>{
            navigate(`/recipe/${id}`)
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Recipe Updated !',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

  return (
    <div>
        <div style={topicDiv}> 
            <h1 style={topic}>Edit Recipe Here !</h1>
            <p style={subTopic}>Refine and Enhance Your Recipes.</p>                
        </div>
        

        <div className='row'>
            <div className='col-md-6'>
                <img src={Image} style={img}></img>
            </div>
            <div className='col-md-6'>
                <form > 
                    <h3 style={formTopic}>Edit Recipe Data Below</h3>

                    <p style={inputTxt}>Recipe Name</p>
                    <input type='text' className='form-control' placeholder='Recipe Name' required value={name} onChange={(e) => setName(e.target.value)} style={inputS}/>

                    <p style={inputTxt}>Recipe Description</p>
                    <textarea type='text' className='form-control' placeholder='Recipe Description' required value={description} rows="3" onChange={(e) => setDescription(e.target.value)} style={inputS}/>

                    <p style={inputTxt}>Recipe Ingredients</p>
                    <textarea type='text' className='form-control' placeholder='Recipe Ingredients' required value={ingredients} rows="3" onChange={(e) => setIngredients(e.target.value)} style={inputS}/>
                    <button className='btn btn-success' onClick={(e) => handleSubmit(e)} style={btn}>Edit Recipe</button>
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

const inputTxt = {
    marginLeft: '20px',
    marginBottom: '5px',
    fontWeight: 'bold',
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


export default EditRecipe