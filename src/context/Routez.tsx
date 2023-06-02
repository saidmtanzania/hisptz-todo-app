import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from '../components/Bar/NavBar/NavigationBar'
import NewTodo from '../components/Todo/NewTodo'
import CardLayout from '../UI/CardLayout'
import LoginForm from '../components/login/LoginForm'
function Routez() {
  const isLogin = true
  return (
    <Router>
      {isLogin && <NavigationBar />}

      <Routes>
        <Route path="/new" element={<NewTodo />} />
        <Route path="/views" element={<CardLayout />} />
        <Route path="/" element={!isLogin && <LoginForm />} />
      </Routes>
    </Router>
  )
}

export default Routez
