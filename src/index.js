import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import App from "./App"
import { BrowserRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import store from "./Redux/Store";
import "./index.css";

const start = ReactDOM.createRoot(document.querySelector("#root"));
start.render(
  <React.StrictMode>
    <Router>
      <Provider store = {store} > 
        <App/>
      </Provider>
    </Router>  
  </React.StrictMode>
)

reportWebVitals();
