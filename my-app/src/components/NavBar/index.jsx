import React from 'react'
import Cart from '../CartWidget/Cart'
import './styles.css'




const NavBar = () => {
  return (
    
         <nav className="navbar navbar-expand-lg navbar-light bg-light menu">
            <a className="navbar-brand title" href="/#">E-Met</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active"href="/#">Sobre Nosotros</a>
            <a className="nav-item nav-link active"href="/#">Productos</a>
            <a className="nav-item nav-link active"href="/#">Contacto</a>
            <a className="nav-item nav-link active"href="/#"><Cart/></a>
            <a className="nav-item nav-link active"href="/#">*cambio de color*</a>
          </div>
        </div>
        </nav> 

  )
}

export default NavBar