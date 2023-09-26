import React, { useState } from "react"; 
import "../styles/Register.css";


function Register() {
  

  return (
    <div className="register-container">
      <div className="hoo">
        <h1 >Registro de Usuario</h1>
        <div className="form-group">
          <label>Nombre:</label>
          <input
            type="text"
            
          />
        </div>
        <div className="form-group">
          <label >Correo Electrónico:</label>
          <input
            type="email"
          />
        </div>
        <div className="form-group">
          <label >Contraseña:</label>
          <input
            type="password"
            
          />
        </div>
        <div className="button-container">
          <button >Registrar</button>
        
        
      </div>
      </div>
      
      
    </div>
  );
}

export default Register;
