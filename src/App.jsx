import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Resources from './pages/Resources';
import About from './pages/About';
import Programs from './pages/Programs';
import Mentors from './pages/Mentors';

function App() {
  return <>
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>        </Route>

       <Route path="/about" element={<About />} />
          <Route path="programs" element={<Programs />} />
        <Route path="mentors" element={<Mentors />} /> 
       
        <Route path="/resources" element={<Resources />} /> 
        {/* <Route path="/signup" element={<SignUpPopup />} /> */}
      </Routes>
    </BrowserRouter>
    </>
}

export default App
