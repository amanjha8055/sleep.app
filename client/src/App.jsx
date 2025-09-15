// App.jsx


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Test from './Test';
import Home from './pages/Home';
import Profile from './pages/Profile'
import './App.css';

function App() {

  return (
      <BrowserRouter>
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </main>
      </BrowserRouter>
  )
}

export default App
