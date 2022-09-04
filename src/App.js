import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import Signup from "./pages/signup/Signup";
import Create from "./pages/Create";
import PageNotFound from "./components/errors/PageNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <header className="App-header">Resume Builder</header>
              </div>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="create" element={<Create />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
