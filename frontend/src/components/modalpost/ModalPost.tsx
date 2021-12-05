import React, { useState } from 'react';
import Modal from 'react-modal';
import { PostPreview } from '../mypage/MypagePostStyle';
import preview from '../../assets/img/profile.jpg';
import Post from '../post/Post';

interface contentProps {
  id: number;
}
const ModalPost: React.FC<contentProps> = (props) => {
  const { id } = props;
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(true);
  };
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
          <Post />
        </div>
      </Modal>
      <PostPreview src={preview} onClick={onClick} />
    </>
  );
};

export default ModalPost;
