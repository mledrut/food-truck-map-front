import React, { useState, useEffect } from 'react'
import "../App.scss";

const SignUpPage = () => {
  const [society, setSociety] = useState("")
  const [siret, setSiret] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <div id="signUp-page">
      <h2>Inscription</h2>

      <form className="signup-form">
        <div className="form-flex">
          <div className="form-group">
            <label for="society">Nom de la société</label>
            <input
              id="society"
              placeholder="Société"
              type="text"
              autocomplete
              value={society}
              onChange={e => setSociety(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="firstname">Prénom du représentant légal</label>
            <input
              id="firstname"
              placeholder="Prénom du représentant légal"
              type="text"
              autocomplete
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="lastname">Nom du représentant légal</label>
            <input
              id="lastname"
              placeholder="Nom du représentant légal"
              type="text"
              autocomplete
              value={lastname}
              onChange={e => setLastname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="siret">Numéro SIRET</label>
            <input
              id="siret"
              placeholder="SIRET"
              type="text"
              value={siret}
              onChange={e => setSiret(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="phone">Téléphone</label>
            <input
              id="phone"
              placeholder="Téléphone"
              type="text"
              autocomplete
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="email">E-mail</label>
            <input
              id="email"
              placeholder="E-mail"
              type="email"
              autocomplete
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
        </div>

        <button className="btn signUp" type="submit">Valider</button>
      </form>
    </div>
  )
}

export default SignUpPage