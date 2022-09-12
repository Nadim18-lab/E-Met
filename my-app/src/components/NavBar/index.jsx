import React from 'react'
import Cart from '../CartWidget/Cart'
import './styles.css'
import { Link } from 'react-router-dom'
// import useLocalStorage from 'use-local-storage'

const NavBar = () => {
  // const[theme, setTheme]= useLocalStorage('theme'? 'dark' :'light')
  
  // const switchTheme = ()=>{
  //   const newTheme = theme ==='light' ? 'dark':'light';
  //   setTheme(newTheme)
  // }
  
  return (
    // data-theme={theme}
         <nav className="navbar navbar-expand-lg navbar-light menu" >
            <Link className="navbar-brand title" to="/">E-Met</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/cart" id='textMenu'><Cart/></Link>
            {/* <Link className="nav-item nav-link active theme-toggle" to="" id='textMenu' onClick={switchTheme}>*cambio de color*</Link> */}
          <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Category
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/category/Nu Metal">Nu Metal</Link>
                <Link className="dropdown-item" to="/category/Hard Rock">Hard Rock</Link>
                <Link className="dropdown-item" to="/category/Modern Metalcore">Modern Metalcore</Link>
              </div>
          </li>
          </div>
        </div>
        </nav> 

  )
}

export default NavBar