import React, { useState } from 'react';

const AttendanceForm = ({ user }) => {
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    await fetch('https://tu-backend.com/api/asistencia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usuario: user?.first_name || 'Desconocido',
        estado: status,
      }),
    });

    alert('Asistencia registrada');
  };

  return (
    <div>
      <h2>Hola {user?.first_name}</h2>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="">--Selecciona--</option>
        <option value="presente">Presente</option>
        <option value="ausente">Ausente</option>
      </select>
      <button onClick={handleSubmit}>Registrar asistencia</button>
    </div>
  );
};

export default AttendanceForm;
