import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../components/main/Main';

const Homepage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default Homepage;
