import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";

function App() {

  return (
    <div className='bg-zinc-950'>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<h1>aaa</h1>}/>
          <Route path="*" element={<h1>aaa</h1>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
