import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { ButtonLink, ButtonsWrapper } from './MypageOptionStyle';

interface userType {
  type: string;
}

const MypageOption: React.FC = () => {
  const location = useLocation();
  const current = location.pathname;
  const params = useParams();
  const user = params.user_id;
  const [isPost, setIsPost] = useState(false);
  const [isReview, setIsReview] = useState(false);
  const [userType, setUserType] = useState<userType[]>([]);
  const [init, setInit] = useState(false);
  useEffect(() => {
    switch (current) {
      case `/${user}/review`:
        setIsReview(true);
        break;
      default:
        setIsPost(true);
    }
    fetch(`http://localhost:3001/type/${user}`)
      .then((res) => res.json())
      .then((data: userType[]) => {
        console.log(data);
        setUserType(data);
      })
      .then(() => {
        setInit(true);
      });
  }, []);
  return (
    <ButtonsWrapper>
      <ButtonLink to={`/${user}`} isSelected={isPost}>
        게시물
      </ButtonLink>
      {init && userType[0].type === 'Photographer' ? (
        <ButtonLink to={`/${user}/review`} isSelected={isReview}>
          리뷰
        </ButtonLink>
      ) : (
        ''
      )}
    </ButtonsWrapper>
  );
};

export default MypageOption;
