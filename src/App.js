import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//imprt pages
import LandingPage from './pages/LandingPage';
import AllIntern from './pages/All_intern';
import MoreDetails2 from './pages/MoreDetails2';
import MoreDetails from "./pages/MoreDetails.js"
import Admin from './pages/Admin';

//import custom hook
import Get from './Hooks/Get';

import Form from './components/Form';

//import rootlayout
import Rootlayout from './layout/Rootlayout';
function App() {
  
  const { intern_data, loading, category,categoryOptions,error } = Get()
 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Rootlayout />} >
          <Route exact path='/' element={<LandingPage intern_data={intern_data} categories={categoryOptions} loading={loading} error={error} />} />
          <Route exact path=':id/:title' element={<MoreDetails2 />} />
          <Route exact path=':category/all_intern' element={<AllIntern categories={categoryOptions}/>} />
          <Route exact path='/admin' element={<Admin/>}/>
          <Route exact path='/newpost' element={<Form/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
