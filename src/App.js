import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
//imprt pages
import LandingPage from './pages/LandingPage';
import All_intern from './pages/All_intern';
import MoreDetails from './pages/MoreDetails';

//import custom hook
import Get from './Hooks/Get';

function App() {
  const {frontend_intern,backend_intern,full_stack}=Get()
  return (
    <div>
      <BrowserRouter>
      <Routes>
  <Route path='/' element={<LandingPage frontend_intern={frontend_intern} backend_intern={backend_intern} full_stack={full_stack}/>} />
  <Route path=':catogery all_intern' element={<All_intern/>} />
  <Route path='details'  element={<MoreDetails/>}/> 

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
