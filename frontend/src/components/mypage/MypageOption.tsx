import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ButtonLink, ButtonsWrapper } from './MypageOptionStyle';

const MypageOption: React.FC = () => {
  const location = useLocation();
  const current = location.pathname;
  const [isPost, setIsPost] = useState(false);
  const [isReview, setIsReview] = useState(false);
  useEffect(() => {
    switch (current) {
      case '/mypage/review':
        setIsReview(true);
        break;
      default:
        setIsPost(true);
    }
  }, []);
  return (
    <ButtonsWrapper>
      <ButtonLink to="/mypage" isSelected={isPost}>
        게시물
      </ButtonLink>
      <ButtonLink to="/mypage/review" isSelected={isReview}>
        리뷰
      </ButtonLink>
    </ButtonsWrapper>
  );
};

export default MypageOption;
