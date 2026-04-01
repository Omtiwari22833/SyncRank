import { createContext, useContext, useState, useEffect } from 'react';

/**
 * UserContext: The "Global Brain" of our app.
 * It stores the user's information so every page can access it.
 */

const UserContext = createContext(undefined);

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // Beginner Tip: useEffect runs once when the app starts.
  // We check if a user was already "logged in" by looking at localStorage.
  useEffect(() => {
    const savedUser = localStorage.getItem('syncrank_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('syncrank_user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('syncrank_user');
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook for easy access to the context
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
