import React from 'react';
import {
  BackgroundWrapper,
  MyPostWrapper,
  ProfileWrapper,
} from './MypageStyle';

const Mypage: React.FC = () => {
  return (
    <BackgroundWrapper>
      <ProfileWrapper />
      <MyPostWrapper />
    </BackgroundWrapper>
  );
};

export default Mypage;
