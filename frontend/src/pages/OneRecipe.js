import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Image from '../images/recipe.jpg';
import axios from 'axios';

const OneRecipe = () => {
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);

    // Get One Recipe Data from DB
    useEffect(() => {
        axios.get(`http://localhost:8000/recipes/${id}`)
        .then(res => {
            setRecipes(res.data.data);
            console.log(res.data.data)
        })
        .catch(err => console.log(err));
    }, []);


  return (
    <div className='container'>
        <h2 style={topic}>{recipes.name}</h2>

        <div className='row'>
            <div className='col-md-6'>
                <img style={img} src={Image}></img>
            </div>

            <div className='col-md-6'>
                <div>
                    <h3 style={subTopic}>Description</h3>
                    <p style={details}>{recipes.description}</p>
                </div>

                <div>
                    <h3 style={subTopic}>Ingredients</h3>
                    <p style={details}>{recipes.ingredients}</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

const topic = {
    marginTop: '30px',
    fontSize: '30px',
    fontWeight: 'bold',
}

const img = {
    marginTop: '30px',
    width: '70%',
    borderRadius: '20px',
}

const subTopic = {
    fontSize: '25px',
    fontWeight: 'bold',
    marginTop: '30px',
    textAlign: 'justify',
}

const details = {
    fontSize: '18px',
    textAlign: 'justify',
}

export default OneRecipe