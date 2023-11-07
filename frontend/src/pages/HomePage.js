import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [isDeleted, setIsDeleted] = useState(false);

    // Get All Recipes from DB
    useEffect(() => {
        axios.get('http://localhost:8000/recipes')
        .then(res => {
            setRecipes(res.data.data);
            console.log(res.data.data)
        })
        .catch(err => console.log(err));
        setIsDeleted(false);
    }, [isDeleted]);


    // Filter Recipes based on search
    const filterdRecipes = recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(search.toLowerCase());
    });


    // Delete Recipe
    const deleteRecipe = (id) => {
        const response  = window.confirm("Are you sure you want to delete this recipe?");
        if(response){
            axios.delete(`http://localhost:8000/recipes/delete/${id}`)
            .then(res => {
                console.log(res.data);
                setIsDeleted(true);
        })
        .catch(err => console.log(err));
        }
    }


    return (
        <div >
            <div style={topicDiv}>
                <h3 style={topic}>All Your Recipes are Here !</h3>
                <p style={subTopic}>Search for your favourite recipe and enjoy cooking.</p>
                <input style={searchbox} placeholder='Search Here' onChange={(e) => setSearch(e.target.value)}/>
            </div>
            
            
            <div className='container'>
                <div className='row'>
                    <Link to='/add'><button className='btn btn-success' style={formTopic}>Add New Recipe</button></Link> 
                </div>
                
                {filterdRecipes.map(recipe => (
                        <div class="card bg-light mb-3" style={card} key={recipe._id}>
                          <Link style={link} to={`/recipe/${recipe._id}`}>
                            <div class="card-body">
                                <h5 class="card-title" key={recipe.name}>
                                    {recipe.name.substring(0, 50)}
                                </h5>
                                <hr/>
                                <p class="card-text" key={recipe.description}>
                                    {recipe.description.substring(0, 100)}...
                                </p>                              
                            </div>
                            </Link> 

                            <div style={buttonDiv}>
                                <Link to={`/edit/${recipe._id}`}><button className='btn btn-sm btn-warning' style={{marginRight: '10px'}}>Edit</button></Link> 
                                <button className='btn btn-sm btn-danger' onClick={() => deleteRecipe(recipe._id)}>Delete</button>
                            </div>
                            
                        </div> 
                ))}

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

const searchbox = {
    width: '20%',
    height: '35px',
    borderRadius: '10px',
    border: '2px solid #ccc',
    marginTop: '10px',
    marginBottom: '40px',
    fontSize: '16px',
    textAlign: 'center',
}

const link = {
    textDecoration: 'none',
    color: 'black',
}

const buttonDiv = {
    display: 'flex',
    justifyContent: 'flex-start',
    marginRight: '10px',
    marginBottom: '10px',
    marginLeft: '20px',
}

const formTopic = {
    marginBottom: '20px', 
    marginLeft: '35px', 
    width: '200px',
    fontWeight: 'bold'
}

const card = {
    display: "inline-flex", 
    margin: "20px", 
    width: "320px", 
    height: '230px'
}

export default HomePage