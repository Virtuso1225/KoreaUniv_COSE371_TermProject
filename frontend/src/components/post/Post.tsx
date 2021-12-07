/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdPlace } from 'react-icons/md';
import { BsCalendarDate } from 'react-icons/bs';
import { AiFillCamera } from 'react-icons/ai';
import {
  ColumnWrapper,
  PhotographerCard,
  PlaceTitle,
  PostCard,
  PostCommentCard,
  PostCommentHeader,
  PostContentWrapper,
  PostHeader,
  PostImg,
  PostTitle,
  RowWrapper,
  UserImg,
  UserName,
  ModelCard,
} from './PostStyle';
import { Photographer, Model } from './PostInfo';
import profile from '../../assets/img/profile.jpg';

interface postProps {
  post_id: number;
  writer_id: string;
  title: string;
  content: string;
  picture: string;
  timestamp: Date;
  date: string;
  m_id: string;
  m_name: string;
  m_area: string;
  m_gender: string;
  m_img: string;
  p_id: string;
  p_name: string;
  p_area: string;
  p_career: string;
  p_img: string;
  place_name: string;
  camera_name: string;
}

interface writerProps {
  w_id: string;
  w_img: string;
  w_name: string;
}

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

const Post: React.FC<postProps> = ({
  post_id,
  writer_id,
  title,
  content,
  picture,
  timestamp,
  date,
  m_id,
  m_name,
  m_area,
  m_gender,
  m_img,
  p_id,
  p_name,
  p_area,
  p_career,
  p_img,
  place_name,
  camera_name,
}: postProps) => {
  const [writer, setWriter] = useState<writerProps>();
  const [model, setModel] = useState<modelProps>();
  const [photographer, setPhotographer] = useState<photographerProps>();

  const initWriter = () => {
    if (writer_id === p_id) {
      setWriter({ w_id: p_id, w_img: p_img, w_name: p_name });
    } else {
      setWriter({ w_id: m_id, w_img: m_img, w_name: m_name });
    }
  };

  const initModel = () => {
    setModel({ m_id, m_name, m_area, m_gender, m_img });
  };

  const initPhotographer = () => {
    setPhotographer({ p_id, p_name, p_area, p_career, p_img });
  };
  useEffect(() => {
    initWriter();
    initModel();
    initPhotographer();
  }, []);
  return (
    <>
      <PostCard>
        <PostHeader>
          <UserImg src={writer?.w_img} />
          <Link to={`/${writer?.w_id}`} style={{ textDecoration: 'none' }}>
            <UserName>{writer?.w_id}</UserName>
          </Link>
        </PostHeader>
        <PostImg src={picture} />
      </PostCard>
      <PostCommentCard>
        <PostCommentHeader>
          <Link to={`/${writer?.w_id}`} style={{ textDecoration: 'none' }}>
            <UserName>{writer?.w_id}</UserName>
          </Link>
          <PostTitle>{title}</PostTitle>
        </PostCommentHeader>
        <PostContentWrapper>
          <RowWrapper>
            <MdPlace size="20" />
            <PlaceTitle>{place_name}</PlaceTitle>
          </RowWrapper>
          <RowWrapper>
            <BsCalendarDate size="20" />
            <PlaceTitle>{date}</PlaceTitle>
          </RowWrapper>
          <RowWrapper>
            <AiFillCamera size="20" />
            <PlaceTitle>{camera_name}</PlaceTitle>
          </RowWrapper>
        </PostContentWrapper>
      </PostCommentCard>
      <ColumnWrapper>
        <PhotographerCard>
          {photographer ? <Photographer {...photographer} /> : ''}
        </PhotographerCard>
        <ModelCard>{model ? <Model {...model} /> : ''}</ModelCard>
      </ColumnWrapper>
    </>
  );
};

export default Post;
