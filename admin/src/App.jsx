import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Profile from "./crud/component/profile/Profile";
import User from "./components/users/User";


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
                <Route index element={<User />} />
            </Route>

            <Route path="products">
                
            </Route>

            <Route path="profile">
              <Route index element={<Profile />} />
              
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;