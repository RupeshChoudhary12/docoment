import React from 'react'
const Navbar = () => {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Docoment</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
   
    </div>
    <ul class="navbar-nav me-auto mb-2 mb-lg-0 m-2">
    <button type="button" class="btn btn-outline-warning btn-lg">Sign In</button>
    <button type="button" class="btn btn-outline-success btn-lg">Register In</button>
       
      </ul>
  </div>
  <button type="button" class="btn btn-outline-danger">Logout</button>

</nav>
      
    </>
  )
}

export default Navbar
