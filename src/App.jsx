import { Routes, Route, RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import './App.css';

import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import Login from './components/Login';

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />}  />
      <Route path='*' element={<Error />} />
    </Routes>
    </>
  );
}

export default App;