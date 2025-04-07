import React, { useEffect, useState } from 'react';
import { initTelegram, getUserInfo } from './utils/telegram';
import LoginForm from './components/LoginForm';
import AttendanceForm from './components/AttendanceForm';

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    initTelegram();
    const tgUser = getUserInfo();
    if (tgUser) {
      setUser(tgUser);
    }
  }, []);

  return (
    <div className="p-4">
      {loggedIn ? (
        <AttendanceForm user={user} />
      ) : (
        <LoginForm onLoginSuccess={() => setLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;
