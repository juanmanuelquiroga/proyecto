import React, { useState } from "react";
import axios from "axios";
import imagen from "../assets/la mo.png";
import "../styles/Login.css";

function Login() {
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
            
          />
        </div>
        <div className="pas">
          <input
            type="password"
            placeholder=" * * * *"
            
          />
        </div>
        <div className="nn">
          <button >  LOGIN </button>
        </div>
        
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
