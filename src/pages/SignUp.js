import React, { useContext, useState } from 'react';
import { ProContext } from "../context/ProContext";
import "../App.scss";

const SignUpPage = () => {

  const [registered, setRegistered] = useState(false)
  const [error, setError] = useState("")
  const [proContext, setProContext] = useContext(ProContext)

  const [society, setSociety] = useState("")
  const [siret, setSiret] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // fonction d'envoi du formulaire
  const handleSubmit = e => {
    e.preventDefault()
    setRegistered(true)

    // message d'erreur
    const errorMessage = "Une erreur s'est produite. Veuillez réessayer ultérieurement."

    // envoie des données en bdd
    fetch(process.env.REACT_APP_API_ENDPOINT + "pros/signup", {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ society, firstname, lastname, siret, phone, email: email, password }),
    })
      .then(async response => {
        if (!response.ok) {
          setRegistered(false)
          if (response.status === 400) {
            setError("Veuillez renseigner tous les champs du formulaire.")
          } else if (response.status === 401) {
            setError("E-mail ou mot de passe invalide.")
          } else if (response.status === 500) {
            console.log(response)
            const data = await response.json()
            if (data.message) setError(data.message || errorMessage)
          } else {
            setError(errorMessage)
          }
        } else {
          const data = await response.json()
          setProContext(oldValues => {
            return { ...oldValues, token: data.token }
          })
        }
      })
      .catch(error => {
        setRegistered(false)
        setError(errorMessage)
      })
  }

  return (
    <div id="signUp-page">
      <h2>Inscription</h2>

      <form className="signup-form" onSubmit={handleSubmit} >
        <div className="form-flex">
          <div className="form-group">
            <label htmlFor="society">Nom de la société</label>
            <input
              id="society"
              placeholder="Société"
              type="text"
              value={society}
              onChange={e => setSociety(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstname">Prénom du représentant légal</label>
            <input
              id="firstname"
              placeholder="Prénom du représentant légal"
              type="text"
              value={firstname}
              onChange={e => setFirstname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Nom du représentant légal</label>
            <input
              id="lastname"
              placeholder="Nom du représentant légal"
              type="text"
              value={lastname}
              onChange={e => setLastname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="siret">Numéro SIRET</label>
            <input
              id="siret"
              placeholder="SIRET"
              type="text"
              value={siret}
              onChange={e => setSiret(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Téléphone</label>
            <input
              id="phone"
              placeholder="Téléphone"
              type="text"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

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
        </div>

        <button className="btn signUp" type="submit">{`${registered ? "Enregistré" : "S'inscrire"}`}</button>
      </form>

      <>{error && error}</>
    </div>
  )
}

export default SignUpPage