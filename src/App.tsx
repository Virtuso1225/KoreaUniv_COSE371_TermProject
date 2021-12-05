import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import MypageMain from './pages/MypageMain';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/mypage/*" element={<MypageMain />} />
    </Routes>
  );
};

export default App;
