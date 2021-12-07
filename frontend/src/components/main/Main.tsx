/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Newpost from '../newpost/Newpost';
import Post from '../post/Post';
import { BackgroundWrapper, SelectionCard } from './MainStyle';

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

const Main: React.FC = () => {
  const [posts, setPosts] = useState<postProps[]>([]);
  const [init, setInit] = useState(false);
  useEffect(() => {
    fetch('http://localhost:3001')
      .then((res) => res.json())
      .then((data: postProps[]) => {
        setPosts(data);
      })
      .then(() => {
        setInit(true);
      });
  }, []);
  return (
    <BackgroundWrapper>
      {posts.map((post) => (
        <SelectionCard key={post.post_id}>
          {init ? <Post {...post} /> : ''}
        </SelectionCard>
      ))}
      <Link to="/create">
        <Newpost />
      </Link>
    </BackgroundWrapper>
  );
};

export default Main;
