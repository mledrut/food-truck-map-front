import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
          <Header />
            <Routes>
                <Route exact path="/" element={<App />} />
                {/* <Route path='/truck/:id' element={<TruckPage/>} /> */}
                <Route exact path="/login" element={<LoginPage />} />
                {/* <Route element={<NotFound/>} /> */}
            </Routes>
        </Router>
    </React.StrictMode>
);
reportWebVitals();
