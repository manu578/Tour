import React from 'react';
import AboutRajasthan from '../Pages/About/AboutRajasthan';
import Home from './Home';
import Contact from './Contact';
import { Route, Routes} from 'react-router-dom';
function App(){
    return (
      <div>
    
      <Home />
      <Routes>
     <Route exact path = "/" element={<Home/>}></Route>
     <Route exact path = "/contact" element={<Contact/>}></Route>
     <Route exact path = "/aboutRajasthan" element={<AboutRajasthan/>}></Route>
    </Routes>
    
      </div>
    );
 
}
export default App;
