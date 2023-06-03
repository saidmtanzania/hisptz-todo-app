import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from '../Components/Bar/NavBar/NavigationBar'
import NewTodo from '../Components/Todo/NewTodo'
import CardLayout from '../UI/CardLayout'
import LoginForm from '../Components/Login/LoginForm'
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
