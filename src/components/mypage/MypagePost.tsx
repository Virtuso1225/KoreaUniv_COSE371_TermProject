import React from 'react';
import MypageOption from './MypageOption';
import { BottomWrapper, PostPreview } from './MypagePostStyle';
import preveiw from '../../assets/img/profile.jpg';

const MypagePost: React.FC = () => {
  return (
    <>
      <MypageOption />
      <BottomWrapper>
        <PostPreview src={preveiw} />
        <PostPreview src={preveiw} />
        <PostPreview src={preveiw} />
        <PostPreview src={preveiw} />
        <PostPreview src={preveiw} />
      </BottomWrapper>
    </>
  );
};

export default MypagePost;
