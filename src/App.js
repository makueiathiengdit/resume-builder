import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

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
          <Route path="about" element={<div>About</div>} />
          <Route path="home" element={<Home />} />

          <Route path="login" element={<div>Login</div>} />
          <Route path="signup" element={<div>Sign Up</div>} />
          <Route path="create" element={<div>Create Resume</div>} />
          <Route path="*" element={<div>Error 404 Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
