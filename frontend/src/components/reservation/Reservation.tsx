/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Photographer } from '../post/PostInfo';
import {
  PhotographerCareer,
  PhotographerImg,
  PhotographerInfo,
  PhotographerName,
} from '../post/PostInfoStyle';
import {
  ReservationWrapper,
  BackgroundWrapper,
  DateSearchWrapper,
  Text,
  DateSearch,
  AvailableWrapper,
  Card,
} from './ReservationStyle';

interface userProps {
  id: string;
  name: string;
  area: string;
  profile_img: string;
  career: string;
  gender: string;
  type: string;
}

const Reservation: React.FC = () => {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState<userProps[]>([]);
  const [init, setInit] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    fetch(`http://localhost:3001/reserve/${e.target.value}`)
      .then((res) => res.json())
      .then((data: userProps[]) => {
        setUsers(data);
      })
      .then(() => {
        setInit(true);
      });
  };

  return (
    <BackgroundWrapper>
      <ReservationWrapper>
        <DateSearchWrapper>
          <Text>날짜 검색하기</Text>
          <DateSearch
            placeholder="날짜 검색하기 (형식: 2021.11.02.)"
            onChange={onChange}
            value={input}
          />
        </DateSearchWrapper>
        {init ? (
          <AvailableWrapper>
            {users.map((user) => (
              <Card key={user.id}>
                <PhotographerImg src={user.profile_img} />
                <PhotographerInfo>
                  <Link to={`/${user.id}`} style={{ textDecoration: 'none' }}>
                    <PhotographerName>
                      {user.type === 'Photographer' ? '작가:' : '모델:'}{' '}
                      {user.id}
                    </PhotographerName>
                  </Link>
                  {user.type === 'Photographer' ? (
                    <PhotographerCareer>
                      경력: {user.career}~
                    </PhotographerCareer>
                  ) : (
                    <PhotographerCareer>{user.gender} </PhotographerCareer>
                  )}
                  <PhotographerCareer>활동지역: {user.area}</PhotographerCareer>
                </PhotographerInfo>
              </Card>
            ))}
          </AvailableWrapper>
        ) : (
          ''
        )}
      </ReservationWrapper>
    </BackgroundWrapper>
  );
};

export default Reservation;
