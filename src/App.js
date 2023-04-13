import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Home } from './pages/Home/index'
import { Cadastrar } from './pages/Cadastrar/index'

function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/cadastrar' element={<Cadastrar />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
