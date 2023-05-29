import React, { useContext } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import LoginJs from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Header from "./Components/Header";
import About from "./Pages/Aboutus/About";
import Signup from "./Pages/Signup/Signup";
import News from "./Pages/News/News";
import Contact from "./Pages/Contact/Contact";
import Profile from "./Pages/Profile/Profile";
import Footer from "./Components/Footer";
import OnboardSignup from "./Pages/OnboardSignup/OnboardSignup";
import Protectedroute from "./Server/security/Protectedroute";
import { Authcontext } from "./Server/context/Authcontext";
import Admin from "./Pages/Admin/Admin";
import Donortable from "./Components/Tables/Donortable";
import Messagetable from "./Components/Tables/Messagetable";
import Admintable from "./Components/Tables/Admintable";
import Newstable from "./Components/Tables/Newstable";
import Adminregister from "./Pages/Adminregister/Adminregister";
import Addnews from "./Pages/Addnews/Addnews";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const location = useLocation();
  const { currentUser } = useContext(Authcontext);

  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <ToastContainer position="top-center" />
          <Header />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/about" element={<About />} />
              <Route path="/login" element={<LoginJs />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/news" element={<News />} />
              <Route
                path="/contact"
                element={
                  <Protectedroute>
                    {" "}
                    <Contact />{" "}
                  </Protectedroute>
                }
              />
              <Route
                path="/profile/:userId"
                element={
                  <Protectedroute>
                    {" "}
                    <Profile />{" "}
                  </Protectedroute>
                }
              />
              <Route
                path="/admin"
                element={
                  <Protectedroute>
                    {" "}
                    <Admin />{" "}
                  </Protectedroute>
                }
              />
              <Route path="/adminreg" element={<Adminregister />} />
              {/* Components routing */}
              <Route path="/donor" element={<Donortable />} />
              <Route path="/message" element={<Messagetable />} />
              <Route path="/admintable" element={<Admintable />} />
              <Route path="/news" element={<Newstable />} />
              <Route path="/onboardsignup" element={<OnboardSignup />} />
              <Route path="/addnews" element={<Addnews />} />
              {/* Componenet routing end */}
              <Route exact path="/" element={<Home />} />
            </Routes>
          </AnimatePresence>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
