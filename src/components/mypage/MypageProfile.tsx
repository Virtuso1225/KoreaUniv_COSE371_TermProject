import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Route, Routes } from 'react-router-dom';
import {
  BackgroundWrapper,
  BoldText,
  ProfileImg,
  ProfileInfoWrapper,
  ProfileWrapper,
  RowWrapper,
  Text,
  UserId,
} from './MypageProfileStyle';
import Profile from '../../assets/img/profile.jpg';
import MypagePost from './MypagePost';
import MypageReview from './MypageReview';

const MypageProfile: React.FC = () => {
  return (
    <BackgroundWrapper>
      <ProfileWrapper>
        <ProfileImg src={Profile} />
        <ProfileInfoWrapper>
          <RowWrapper>
            <UserId>char_smine</UserId>
            <AiFillStar size="20" style={{ marginRight: '10' }} />
            <BoldText>4.5</BoldText>
          </RowWrapper>
          <RowWrapper>
            <Text>게시물 </Text>
            <BoldText>41</BoldText>
          </RowWrapper>
          <BoldText>차승민</BoldText>
          <br />
          <Text>경력: 2020.10.04~</Text>
        </ProfileInfoWrapper>
      </ProfileWrapper>
      <Routes>
        <Route path="/" element={<MypagePost />} />
        <Route path="/review" element={<MypageReview />} />
      </Routes>
    </BackgroundWrapper>
  );
};

export default MypageProfile;
