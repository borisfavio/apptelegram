import React, { useState } from 'react';

const LoginForm = ({ onLoginSuccess }) => {
  const [code, setCode] = useState('');

  const handleLogin = async () => {
    // Aquí validas el código con tu backend
    if (code === '1234') {
      onLoginSuccess();
    } else {
      alert('Código incorrecto');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Código o nombre" />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
};

export default LoginForm;
