import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Mypage from './pages/Mypage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/mypage" element={<Mypage />} />
    </Routes>
  );
};

export default App;
