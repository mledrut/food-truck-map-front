import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
        <div className="left">
            <p>Accueil</p>
        </div>
        <div className="center">
            <img src="/images/logo.svg" alt="" />
        </div>
        <div className="right">
            <Link to={'login'}>Espace pro</Link>
        </div>
    </header>
  )
}

export default Header