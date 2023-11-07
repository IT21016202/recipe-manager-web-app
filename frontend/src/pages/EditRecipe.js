import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Image from '../images/editRecipe.jpg';
import axios from 'axios';

const EditRecipe = () => {
    const { id } = useParams();

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
        const updatedRecipe = {
            name,
            description,
            ingredients
        }
        axios.patch(`http://localhost:8000/recipes/update/${id}`, updatedRecipe)
        .then((res)=>{
            alert('Recipe Updated Successfully !');
            window.location = `/recipe/${id}`;
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
                    <input type='text' className='form-control' placeholder='Recipe Name' value={name} onChange={(e) => setName(e.target.value)} style={inputS}/>
                    <textarea type='text' className='form-control' placeholder='Recipe Description' value={description} rows="3" onChange={(e) => setDescription(e.target.value)} style={inputS}/>
                    <textarea type='text' className='form-control' placeholder='Recipe Ingredients' value={ingredients} rows="3" onChange={(e) => setIngredients(e.target.value)} style={inputS}/>
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