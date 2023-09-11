import React, { useState } from "react";
import axios from "axios";
import imagen from "../assets/la mo.png";
import "../styles/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function handleLogin() {
    axios
      .post("http://89.116.25.43:3500/api/login", { email, password })
      .then((response) => {
        if (response.data.success) {
          window.location.href = ""; 
        } else {
          setErrorMessage("Credenciales incorrectas");
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Error al iniciar sesión");
      });
  }

  return (
    <div className="main">
      <div className="fondo">
        <div className="logo">
          <img src={imagen} alt="img" />
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="pas">
          <input
            type="password"
            placeholder=" * * * *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="nn">
          <button onClick={handleLogin}>  LOGIN </button>
        </div>
        <div className="errorMessage">{errorMessage}</div>
      </div>
      <div className="main2">
        <p>
          Olvidaste tu contraseña? <a href=""> Click aquí</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
