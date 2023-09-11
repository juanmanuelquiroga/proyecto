import React, { useState } from "react";
import axios from "axios";  
import "../styles/Register.css";
//import {useHistory} from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault()
    console.log(" name :", name)
    console.log(" email :",email)
    console.log("Password:", password)  

    const data = {
      usuario: usuario,
      email : email,
      password: password

    }
    axios.post("http://89.116.25.43:3500/api/usuarios/registrar", data)
     .then((response) => {
        if (response.data.success) {
          setSuccessMessage("Registro exitoso. Inicia sesión ahora.");
          // Puedes redirigir al usuario a la página de inicio de sesión aquí si lo deseas.
        } else {
          setErrorMessage("Error en el registro. Verifica tus datos.");
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Error en el registro. Inténtalo de nuevo más tarde.");
      });
  };

  return (
    <div className="register-container">
      <h2 >Registro de Usuario</h2>
      <div className="form-group">
        <label>Nombre:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label >Correo Electrónico:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label >Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="button-container">
        <button onClick={handleRegister}>Registrar</button>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        
        x
      </div>
      
    </div>
  );
}

export default Register;
