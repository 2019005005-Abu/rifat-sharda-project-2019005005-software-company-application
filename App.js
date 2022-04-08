//import ServicePage from  './Pages/ServicePage.js';
import {BrowserRouter as Router} from 'react-router-dom';
import React from 'react'
import AppRoute from './Router/AppRoute.js';
function App() {
  return (
   <Router>
  <AppRoute/>
  </Router>
  );
}

export default App;
