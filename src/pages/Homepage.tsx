import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Selection from '../components/selection/Selection';

const Homepage: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Selection />} />
      </Routes>
    </div>
  );
};

export default Homepage;
