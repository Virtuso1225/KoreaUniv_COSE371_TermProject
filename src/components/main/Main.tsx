import React from 'react';
import Post from '../post/Post';
import { BackgroundWrapper, SelectionCard } from './MainStyle';

const Main: React.FC = () => {
  return (
    <BackgroundWrapper>
      <SelectionCard>
        <Post />
      </SelectionCard>
    </BackgroundWrapper>
  );
};

export default Main;
