import React from 'react';
import logo from '../../../images/logos/logo.png'

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
  <a class="navbar-brand ml-5"><img src={logo}  height="30" alt=""/></a>
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link mr-5" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Our Portfolio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">OurTeam</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5 " href="#">Contact Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5  " href="#">Login</a>
      </li>
      
      
      
    </ul>
    
  </div>
</nav>
    );
};

export default Navbar;