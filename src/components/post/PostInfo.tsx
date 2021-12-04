import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhotographerCareer,
  PhotographerImg,
  PhotographerInfo,
  PhotographerName,
} from './PostInfoStyle';
import PhotographerProfile from '../../assets/img/profile.jpg';

const Photographer: React.FC = () => {
  return (
    <>
      <PhotographerImg src={PhotographerProfile} />
      <PhotographerInfo>
        <Link to="/mypage" style={{ textDecoration: 'none' }}>
          <PhotographerName>작가: 차승민</PhotographerName>
        </Link>
        <PhotographerCareer>경력: 2020.10.04~</PhotographerCareer>
        <PhotographerCareer>활동지역: 서울</PhotographerCareer>
      </PhotographerInfo>
    </>
  );
};

const Model: React.FC = () => {
  return (
    <>
      <PhotographerImg src={PhotographerProfile} />
      <PhotographerInfo>
        <Link to="/mypage" style={{ textDecoration: 'none' }}>
          <PhotographerName>모델: 차승민</PhotographerName>
        </Link>
        <PhotographerCareer>경력: 2020.10.04~</PhotographerCareer>
        <PhotographerCareer>활동지역: 서울</PhotographerCareer>
      </PhotographerInfo>
    </>
  );
};
export { Photographer, Model };
