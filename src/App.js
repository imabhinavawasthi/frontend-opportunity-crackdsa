import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//imprt pages
import LandingPage from './pages/LandingPage';
import All_intern from './pages/All_intern';
import MoreDetails from './pages/MoreDetails';
import Admin from './pages/Admin';

//import custom hook
import Get from './Hooks/Get';

function App() {
  const { frontend_intern, backend_intern, full_stack, loading, category} = Get()
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<LandingPage frontend_intern={frontend_intern} backend_intern={backend_intern} full_stack={full_stack} loading={loading} />} />
          <Route exact path=':id' element={<MoreDetails />} />
          <Route exact path=':catogery/all_intern' element={<All_intern internships={category === 'full stack' ? full_stack : (category === 'frontend' ? frontend_intern : backend_intern)} />} />
          <Route exact path='/admin' element={<Admin/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
