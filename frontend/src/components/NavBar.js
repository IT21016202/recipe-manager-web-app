import React from 'react'
import Logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light" style={{height: '80px',}}>
            <Link to='/'><img src={Logo} alt="Logo" width="50" height="50" class="d-inline-block align-top" style={{marginRight: "30px"}}/></Link>
            <Link to='/'><a class="navbar-brand" href="#" style={{fontWeight: 'bold', fontFamily: 'cursive', fontSize: '25px', marginRight: '30px'}}>Recipe Master</a></Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            </div>
        </nav>
        <hr/>
    </div>
        
        
  )
}

export default NavBar