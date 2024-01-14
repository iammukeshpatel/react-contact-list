import React from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./contexts/AuthContext";

// https://github.com/apurvpatil18/react-ecommerce-1.0/blob/main/src/App.js

function App() {
  return (
    <React.Fragment>
      <AuthProvider>
        <div className="container-fluid">
          <Layout />
        </div>
      </AuthProvider>
    </React.Fragment>
  );
}

export default App;
