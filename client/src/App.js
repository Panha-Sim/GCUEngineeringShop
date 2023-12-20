import './App.css';
import Landing from './pages/Landing/Landing';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './pages/Landing/Nav';
import VerticalNav from './pages/VerticalNav/VerticalNav'
import SignedInStudent from './pages/SignedInStudent/SignedInStudent';
import Register from './pages/Register/Register';


function App() {
  const location = useLocation();
  return (
    <>
    {location.pathname === '/signedInStudent' ? <VerticalNav/> : <Nav/>}
    
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/signedInStudent' element={<SignedInStudent/>}/>
      <Route path='register' element={<Register/>}/>
    </Routes>
    </>
   
  );
}

export default App;
