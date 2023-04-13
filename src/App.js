import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home/index'
function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
