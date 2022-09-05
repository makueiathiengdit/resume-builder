import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/login/Login";
import ForgotPassword from "./pages/login/ForgotPassword";
import ChangePassword from "./pages/login/ChangePassword";

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
                <Link to="/sign-up">Sign Up</Link>
                <Link to="/login">Login</Link>
                <Link to="/create">Create</Link>
              </div>
            }
          />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<Signup />} />
          <Route path="create" element={<Create />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="change-password" element={<ChangePassword />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
