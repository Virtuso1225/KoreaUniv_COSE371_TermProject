import React from 'react';
import MypageOption from './MypageOption';
import { BottomWrapper } from './MypagePostStyle';
import preview from '../../assets/img/profile.jpg';
import ModalPost from '../modalpost/ModalPost';

const MypagePost: React.FC = () => {
  const dummyList = [
    { id: 0, img: preview },
    { id: 1, img: preview },
  ];
  return (
    <>
      <MypageOption />
      <BottomWrapper>
        {dummyList.map((content) => (
          <div key={content.id}>
            <ModalPost id={content.id} />
          </div>
        ))}
      </BottomWrapper>
    </>
  );
};

export default MypagePost;
