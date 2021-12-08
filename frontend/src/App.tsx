import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Hotplacepage from './pages/Hotplacepage';
import MypageMain from './pages/MypageMain';
import NewPostpage from './pages/NewPostpage';
import Reservationpage from './pages/Reservationpage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<Homepage />} />
      <Route path="/create/*" element={<NewPostpage />} />
      <Route path="/:user_id/*" element={<MypageMain />} />
      <Route path="/reserve" element={<Reservationpage />} />
      <Route path="/place" element={<Hotplacepage />} />
    </Routes>
  );
};

export default App;
