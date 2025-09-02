"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id?: number;
  name: string;
  email: string;
  role: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  register: (name: string, email: string, password: string) => Promise<{ success: boolean; error?: string; message?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true); // Start with true for initial check

  // Check for existing token on mount
  useEffect(() => {
    const savedToken = localStorage.getItem('jwtToken');
    if (savedToken) {
      setToken(savedToken);
      fetchProfile(savedToken);
    } else {
      setLoading(false); // No token found, done loading
    }
  }, []);

  const fetchProfile = async (authToken: string) => {
    try {
      const response = await fetch('http://localhost:8080/api/auth/profile', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });
      
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        // Token might be expired
        logout();
      }
    } catch (error) {
      console.error('Failed to fetch profile:', error);
      logout();
    } finally {
      setLoading(false); // Done loading after profile fetch
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      });

      if (response.ok) {
        const data = await response.json();
        setToken(data.token);
        setUser({ name: data.name, email: data.email, role: data.role });
        localStorage.setItem('jwtToken', data.token);
        return { success: true };
      } else {
        const error = await response.text();
        return { success: false, error };
      }
    } catch (error) {
      return { success: false, error: 'Network error. Please check if the server is running.' };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8080/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, role: 'USER' })
      });

      const data = await response.text();
      
      if (response.ok) {
        // After successful registration, automatically log in
        const loginResult = await login(email, password);
        if (loginResult.success) {
          return { success: true, message: data };
        } else {
          return { success: false, error: 'Registration successful but login failed.' };
        }
      } else {
        return { success: false, error: data };
      }
    } catch (error) {
      return { success: false, error: 'Network error. Please check if the server is running.' };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('jwtToken');
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}