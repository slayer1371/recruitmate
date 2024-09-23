import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Resources1 from './pages/resources/Resources1';
import Resource2 from './pages/resources/Resource2';
import Resource3 from './pages/resources/Resource3';
import Resource4 from './pages/resources/Resource4';

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
       
        <Route path="/resource1" element={<Resources1 />} /> 
        <Route path="/resource2" element={<Resource2 />} /> 
        <Route path="/resource3" element={<Resource3 />} /> 
        <Route path="/resource4" element={<Resource4 />} /> 
        {/* {/* <Route path="/signup" element={<SignUpPopup />} /> */}
      </Routes>
    </BrowserRouter>
    </>
}

export default App
