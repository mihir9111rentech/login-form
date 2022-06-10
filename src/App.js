/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import LoginReg from "./components/pages/auth/LoginReg";
import Dashboard from "./components/pages/Dashboard";
import EditPage from "./components/pages/EditPage";

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route path="/" element={<Home />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="login" element={<LoginReg />} />
               </Route>
               <Route path="/dashboard" element={<Dashboard />} />
               {/* <Route path="edit" element={<EditPage />} /> */}
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
