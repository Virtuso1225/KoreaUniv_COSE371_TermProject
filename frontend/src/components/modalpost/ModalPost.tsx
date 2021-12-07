/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { PostPreview } from '../mypage/MypagePostStyle';
import Post from '../post/Post';

interface postpreviewProps {
  post_id: string;
  picture: string;
}
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

const ModalPost: React.FC<postpreviewProps> = ({
  post_id,
  picture,
}: postpreviewProps) => {
  const [posts, setPosts] = useState<postProps[]>([]);
  const [init, setInit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    fetch(`http://localhost:3001/post/${post_id}`)
      .then((res) => res.json())
      .then((data: postProps[]) => {
        setPosts(data);
      })
      .then(() => {
        setInit(true);
      });
  }, []);
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
          },
          content: {
            position: 'absolute',
            top: '100px',
            left: '100px',
            right: '100px',
            bottom: '100px',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {init ? <Post {...posts[0]} /> : ''}
        </div>
      </Modal>
      <PostPreview src={picture} onClick={onClick} />
    </>
  );
};

export default ModalPost;
