import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//imprt pages
import LandingPage from './pages/LandingPage';
import All_intern from './pages/All_intern';
import MoreDetails from './pages/MoreDetails';

//import custom hook
import Get from './Hooks/Get';

function App() {
  const {all_intern}=Get()
  return (
    <div>
      <BrowserRouter>
      <Routes>
  <Route path='/' element={<LandingPage/>} />
  <Route path=':catogery all_intern' element={<All_intern/>} />
  <Route path='details'  element={<MoreDetails/>}/> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
