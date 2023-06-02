import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Button from '../components/Button'
import NewTodo from '../views/NewTodo'
import CardLayout from '../CardLayout'
import LoginForm from '../views/LoginForm'
function Routez() {
  const isLogin = false
  return (
    <Router>
      {isLogin && <Button />}

      <Routes>
        <Route path="/new" element={<NewTodo />} />
        <Route path="/views" element={<CardLayout />} />

        <Route path="/" element={!isLogin && <LoginForm />} />
      </Routes>
    </Router>
  )
}

export default Routez
