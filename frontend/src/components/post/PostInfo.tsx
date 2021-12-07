/* eslint-disable camelcase */
import React from 'react';
import { Link } from 'react-router-dom';
import {
  PhotographerCareer,
  PhotographerImg,
  PhotographerInfo,
  PhotographerName,
} from './PostInfoStyle';
import PhotographerProfile from '../../assets/img/profile.jpg';

interface modelProps {
  m_id: string;
  m_name: string;
  m_area: string;
  m_gender: string;
  m_img: string;
}

interface photographerProps {
  p_id: string;
  p_name: string;
  p_area: string;
  p_career: string;
  p_img: string;
}

const Photographer: React.FC<photographerProps> = ({
  p_id,
  p_name,
  p_area,
  p_career,
  p_img,
}: photographerProps) => {
  return (
    <>
      <PhotographerImg src={p_img} />
      <PhotographerInfo>
        <Link to={`/${p_id}`} style={{ textDecoration: 'none' }}>
          <PhotographerName>작가: {p_id}</PhotographerName>
        </Link>
        <PhotographerCareer>경력: {p_career}~</PhotographerCareer>
        <PhotographerCareer>활동지역: {p_area}</PhotographerCareer>
      </PhotographerInfo>
    </>
  );
};

const Model: React.FC<modelProps> = ({
  m_id,
  m_name,
  m_area,
  m_gender,
  m_img,
}: modelProps) => {
  return (
    <>
      <PhotographerImg src={m_img} />
      <PhotographerInfo>
        <Link to={`/${m_id}`} style={{ textDecoration: 'none' }}>
          <PhotographerName>모델: {m_id}</PhotographerName>
        </Link>
        <PhotographerCareer>성별: {m_gender}</PhotographerCareer>
        <PhotographerCareer>활동지역: {m_area}</PhotographerCareer>
      </PhotographerInfo>
    </>
  );
};
export { Photographer, Model };
