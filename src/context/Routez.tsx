import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Button from '../components/Button'
import NewTodo from '../views/NewTodo'
import CardLayout from '../CardLayout'
function Routez() {
  return (
    <Router>
      <Button />

      <Routes>
        <Route path="/" element={<NewTodo />} />
        <Route path="/views" element={<CardLayout />} />
      </Routes>
    </Router>
  )
}

export default Routez
