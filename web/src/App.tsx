import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MonsterSelect from './pages/MonsterSelect';

const App: React.FC = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MonsterSelect />} />
      </Routes>
    </Router>
  )
}

export default App;