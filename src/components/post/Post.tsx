import React from 'react';
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

const Post: React.FC = () => {
  return (
    <>
      <PostCard>
        <PostHeader>
          <UserImg src={profile} />
          <Link to="/mypage" style={{ textDecoration: 'none' }}>
            <UserName>차승민</UserName>
          </Link>
        </PostHeader>
        <PostImg src={profile} />
      </PostCard>
      <PostCommentCard>
        <PostCommentHeader>
          <Link to="/mypage" style={{ textDecoration: 'none' }}>
            <UserName>차승민</UserName>
          </Link>
          <PostTitle>갈대밭 노을</PostTitle>
        </PostCommentHeader>
        <PostContentWrapper>
          <RowWrapper>
            <MdPlace size="20" />
            <PlaceTitle>울산 태화강</PlaceTitle>
          </RowWrapper>
          <RowWrapper>
            <BsCalendarDate size="20" />
            <PlaceTitle>2020.08.04</PlaceTitle>
          </RowWrapper>
          <RowWrapper>
            <AiFillCamera size="20" />
            <PlaceTitle>Iphone 11pro</PlaceTitle>
          </RowWrapper>
        </PostContentWrapper>
      </PostCommentCard>
      <ColumnWrapper>
        <PhotographerCard>
          <Photographer />
        </PhotographerCard>
        <ModelCard>
          <Model />
        </ModelCard>
      </ColumnWrapper>
    </>
  );
};

export default Post;
