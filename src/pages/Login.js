import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../App.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div id="login-page">
      <h2>Se connecter</h2>
      <form className="auth-form">
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            id="password"
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button className="btn signIn" type="submit">Se connecter</button>
      </form>
      <h3>Pas encore de compte ?</h3>
      <p>Vous êtes un pro et vous souhaitez avoir une fiche sur notre site ? <br /> Inscrivez-vous ! C'est gratuit !</p>
      <Link to={'/signup'}>
        <button className="btn signUp">S'inscrire</button>
      </Link>
    </div>
  )
}

export default LoginPage