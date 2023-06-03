import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from '../Components/Bar/NavBar/NavigationBar'
import NewTodo from '../Components/Todo/NewTodo'
import CardLayout from '../UI/CardLayout'
import LoginForm from '../Components/Login/LoginForm'
import { useState } from 'react'

function Routez() {
  const [isLogin, setLogin] = useState(false)
  function updateLoginState() {
    setLogin(true)
  }
  return (
    <Router>
      {isLogin && <NavigationBar />}

      <Routes>
        <Route path="/new" element={<NewTodo />} />
        <Route path="/views" element={<CardLayout />} />
        <Route
          path="/"
          element={!isLogin && <LoginForm data={updateLoginState} />}
        />
      </Routes>
    </Router>
  )
}

export default Routez
