import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './js/App';
import reportWebVitals from './reportWebVitals';
import Calendar from "./js/Calendar"
import 'bootstrap/dist/css/bootstrap.css'
import Navigation from "./js/Navigation"
import { 
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <BrowserRouter>
    <div>
      <Navigation />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="calendar" element={<Calendar />} />
        </Routes>
    </div>
    </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
