import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Resources1 from "./pages/resources/Resources1";
import Resource2 from "./pages/resources/Resource2";
import Resource3 from "./pages/resources/Resource3";
import Home from "./pages/Home";
import Cal from "./components/page";
import About from "./pages/About";
import Programs from "./pages/Programs";
import Mentors from "./pages/Mentors";
import Login from "./components/Login";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            {" "}
          </Route>

          <Route path="/about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="mentors" element={<Mentors />} />

          <Route path="/resource1" element={<Resources1 />} />
          <Route path="/resource2" element={<Resource2 />} />
          <Route path="/resource3" element={<Resource3 />} />
          <Route path="/cal" element={<Cal />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
