import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

const ADMIN_CREDENTIALS = {
  username: 'admin@mumindistributors.com',
  password: 'Mum!nD1str!butors#2024'
}

export function AuthProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(() => {
    return sessionStorage.getItem('mumin_admin') === 'true'
  })

  const login = (username, password) => {
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsAdmin(true)
      sessionStorage.setItem('mumin_admin', 'true')
      return true
    }
    return false
  }

  const logout = () => {
    setIsAdmin(false)
    sessionStorage.removeItem('mumin_admin')
  }

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
