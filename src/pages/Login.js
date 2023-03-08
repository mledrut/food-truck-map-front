import React, { useState, useEffect } from 'react'
import "../App.scss";

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <h2>Se connecter</h2>
      <form className="auth-form">
        <div className="form-group">
          <label for="email">E-mail</label>
          <input
            id="email"
            placeholder="E-mail"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label for="password">Mot de passe</label>
          <input
            id="password"
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
      <h3>Pas encore de compte ?</h3>
      <p>Vous êtes un pro et vous souhaitez avoir une fiche sur notre site ? <br /> Inscrivez-vous ! C'est gratuit !</p>
      <button>S'inscrire</button>
    </>
  )
}

export default LoginPage