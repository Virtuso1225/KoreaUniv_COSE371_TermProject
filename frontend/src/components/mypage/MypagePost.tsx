/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MypageOption from './MypageOption';
import { BottomWrapper } from './MypagePostStyle';
import ModalPost from '../modalpost/ModalPost';

interface postpreviewProps {
  post_id: string;
  picture: string;
}

const MypagePost: React.FC = () => {
  const params = useParams();
  const current = params.user_id;
  const [preview, setPreview] = useState<postpreviewProps[]>([]);
  const [init, setInit] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:3001/my_post/${current}`)
      .then((res) => res.json())
      .then((data: postpreviewProps[]) => {
        setPreview(data);
      })
      .then(() => {
        setInit(true);
      });
  }, []);
  return (
    <>
      <MypageOption />
      {init ? (
        <BottomWrapper>
          {preview.map((content) => (
            <div key={content.post_id}>
              <ModalPost {...content} />
            </div>
          ))}
        </BottomWrapper>
      ) : (
        ''
      )}
    </>
  );
};

export default MypagePost;
