import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  const signOut = () => {
    // Aqui você pode realizar qualquer lógica de logout necessária, como limpar o estado ou remover tokens de autenticação.
    setAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ authenticated, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
