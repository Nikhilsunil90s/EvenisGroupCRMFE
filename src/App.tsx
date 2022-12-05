import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './component/LoginPages';
import Dashboard from './component/Dashboard';
import Sidebar from './component/Sidebar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Provider} from "react-redux"
import {store} from './redux/store'
function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
      <Route path='/' element={<LoginPage       />} />
      <Route path='/download-center' element={<Sidebar       ><Dashboard   /> </Sidebar>} />
   </Routes>
   </Router>
   </Provider>
  );

}

export default App;
