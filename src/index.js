import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import Header from "./components/Header";
import { ProProvider } from "./context/ProContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <ProProvider>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<App />} />

                    {/* <Route path='/truck/:id' element={<TruckPage/>} /> */}

                    {/* page de connexion */}
                    <Route exact path="/login" element={<LoginPage />} />

                    {/* page de création nouveau compte */}

                    <Route exact path="/signup" element={<SignUpPage />} />


                    {/* <Route element={<NotFound/>} /> */}
                </Routes>
            </Router>
        </ProProvider>
    </React.StrictMode>
);
reportWebVitals();
