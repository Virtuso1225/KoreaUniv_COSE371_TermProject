/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Route, Routes, useParams } from 'react-router-dom';
import {
  BackgroundWrapper,
  BoldText,
  ProfileImg,
  ProfileInfoWrapper,
  ProfileWrapper,
  RowWrapper,
  Text,
  UserId,
} from './MypageProfileStyle';
import MypagePost from './MypagePost';
import MypageReview from './MypageReview';

interface rateProps {
  total_rate: number;
}

interface postProps {
  post_num: number;
}

interface profileProps {
  id: string;
  name: string;
  area: string;
  profile_img: string;
  career: string;
  type: string;
}

const MypageProfile: React.FC = () => {
  const params = useParams();
  const current = params.user_id;
  const [rate, setRate] = useState<rateProps[]>([]);
  const [postNum, setPostNum] = useState<postProps[]>([]);
  const [profile, setProflie] = useState<profileProps[]>([]);
  const [init, setInit] = useState(false);

  const fetchAll = async () => {
    const [rateData, postNumData, profileData] = await Promise.all([
      fetch(`http://localhost:3001/rate/${current}`)
        .then((value) => value.json())
        .then((value: rateProps[]) => value),
      fetch(`http://localhost:3001/post_num/${current}`)
        .then((value) => value.json())
        .then((value: postProps[]) => value),
      fetch(`http://localhost:3001/profile/${current}`)
        .then((value) => value.json())
        .then((value: profileProps[]) => value),
    ]);
    setRate(rateData);
    setPostNum(postNumData);
    setProflie(profileData);
  };
  useEffect(() => {
    fetchAll().then(() => {
      setInit(true);
    });
  }, []);

  return (
    <BackgroundWrapper>
      {init ? (
        <ProfileWrapper>
          <ProfileImg src={profile[0].profile_img} />
          <ProfileInfoWrapper>
            <RowWrapper>
              <UserId>{current}</UserId>
              {profile[0].type === 'Photographer' ? (
                <>
                  <AiFillStar size="20" style={{ marginRight: '10' }} />
                  <BoldText>{Number(rate[0].total_rate).toFixed(1)}</BoldText>
                </>
              ) : (
                ''
              )}
            </RowWrapper>
            <RowWrapper>
              <Text>게시물 </Text>
              <BoldText>{postNum[0].post_num}</BoldText>
            </RowWrapper>
            {profile[0].type === 'Photographer' ? (
              <BoldText>작가: {profile[0].name}</BoldText>
            ) : (
              <BoldText>모델: {profile[0].name}</BoldText>
            )}
            {profile[0].type === 'Photographer' ? (
              <>
                <br />
                <Text>경력: {profile[0].career}~</Text>
              </>
            ) : (
              ''
            )}
            <br />
            <Text>활동지역: {profile[0].area}~</Text>
          </ProfileInfoWrapper>
        </ProfileWrapper>
      ) : (
        ''
      )}
      <Routes>
        <Route path="/" element={<MypagePost />} />
        <Route path="/review" element={<MypageReview />} />
      </Routes>
    </BackgroundWrapper>
  );
};

export default MypageProfile;
