import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import BasicForm from "./BasicForm/BasicForm";
import BasicReceiveData from "./BasicReceiveData/BasicReceiveData";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<BasicForm />} />
        <Route exact path="/basic-receive" element={<BasicReceiveData />} />
      </Routes>
    </Router>
  );
}