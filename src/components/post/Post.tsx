import React from 'react';
import { Link } from 'react-router-dom';
import {
  PostCard,
  PostComment,
  PostHeader,
  PostImg,
  UserImg,
  UserName,
} from './PostStyle';
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
      <PostComment />
    </>
  );
};

export default Post;
