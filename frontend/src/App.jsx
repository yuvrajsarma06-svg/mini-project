import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Create from './pages/Create'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<Create />} />

        {/* Extra routes for menu */}
        <Route path="/add-students" element={<div>Add Students</div>} />
        <Route path="/display-students" element={<div>Display Students</div>} />
        <Route path="/add-mentors" element={<div>Add Mentors</div>} />
        <Route path="/display-mentors" element={<div>Display Mentors</div>} />
      </Route>
    </Routes>
  )
}

export default App