import React, { useState } from 'react';
import { Photographer } from '../post/PostInfo';
import {
  ReservationWrapper,
  BackgroundWrapper,
  DateSearchWrapper,
  Text,
  DateSearch,
  AvailableWrapper,
  Card,
} from './ReservationStyle';

const Reservation: React.FC = () => {
  const [input, setInput] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };
  return (
    <BackgroundWrapper>
      <ReservationWrapper>
        <DateSearchWrapper>
          <Text>날짜 검색하기</Text>
          <DateSearch
            placeholder="날짜 검색하기"
            onChange={onChange}
            value={input}
          />
          <Text>{input}</Text>
        </DateSearchWrapper>
        <AvailableWrapper>
          <Card>
            <Photographer />
          </Card>
          <Card>
            <Photographer />
          </Card>
          <Card>
            <Photographer />
          </Card>
          <Card>
            <Photographer />
          </Card>
          <Card>
            <Photographer />
          </Card>
        </AvailableWrapper>
      </ReservationWrapper>
    </BackgroundWrapper>
  );
};

export default Reservation;
