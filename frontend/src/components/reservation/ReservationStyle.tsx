import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const ReservationWrapper = styled.div`
  display: flex;
  width: 1194px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DateSearchWrapper = styled.div`
  display: flex;
  width: 700px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.div`
  color: #1d1d1d;
  font-size: 15px;
  font-family: 'SCDreamRegular';
`;

export const DateSearch = styled.input`
  font-size: 15px;
  color: #919191;
  font-family: 'SCDreamMedium';
  width: 300px;
  background: #ffffff;
  box-shadow: inset 5px 5px 13px #d9d9d9, inset -9px -9px 17px #ffffff;
  border: none;
  margin-left: 50px;
  margin-right: 50px;
  padding: 10px;
  text-align: center;
  border-radius: 18px;
  :focus::placeholder {
    color: transparent;
    transition: 0.4s;
    border-color: transparent;
  }
`;

export const AvailableWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
`;

export const Card = styled.div`
  display: flex;
  width: 250px;
  height: 290px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  margin: 15px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
