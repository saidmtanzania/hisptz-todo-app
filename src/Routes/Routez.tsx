import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from '../Components/Bar/NavBar/NavigationBar'
import NewTodo from '../Components/Todo/NewTodo'
import CardLayout from '../UI/CardLayout'
import LoginForm from '../Components/Login/LoginForm'
import { useState } from 'react'

function Routez() {
  const [isLogin, setLogin] = useState(false)

  const handleLogin = () => {
    sessionStorage.setItem('isLogin', 'true')
    setLogin(true)
  }

  return (
    <Router>
      {isLogin && <NavigationBar />}

      <Routes>
        <Route path="/new" element={<NewTodo data={handleLogin} />} />
        <Route path="/views" element={<CardLayout data={handleLogin} />} />
        <Route
          path="/"
          element={!isLogin && <LoginForm data={handleLogin} />}
        />
      </Routes>
    </Router>
  )
}

export default Routez
