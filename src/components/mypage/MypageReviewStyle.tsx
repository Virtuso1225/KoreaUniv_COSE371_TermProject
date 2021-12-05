import styled from 'styled-components';

export const ReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const ReviewBlock = styled.div`
  display: flex;
  width: 500px;
  height: 100px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
  border-radius: 26px;
  margin-bottom: 20px;
  flex-direction: column;
`;

export const UserId = styled.div`
  color: #1d1d1d;
  font-family: 'SCDreamMedium';
  font-size: 15px;
  margin-left: 20px;
  margin-top: 17px;
`;

export const ReviewContent = styled.div`
  color: #1d1d1d;
  font-family: 'SCDreamRegular';
  font-size: 15px;
  margin-left: 20px;
  margin-top: 17px;
`;
