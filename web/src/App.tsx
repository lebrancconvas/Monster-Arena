import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import MonsterSelect from './pages/MonsterSelect';
import MonsterArena from './pages/MonsterArena';

const App: React.FC = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<MonsterSelect />} />
        <Route path="/arena" element={<MonsterArena />} />
      </Routes>
    </Router>
  )
}

export default App;