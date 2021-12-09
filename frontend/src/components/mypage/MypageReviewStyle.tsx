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

export const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
`;

export const RateWrapper = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
`;

export const UserId = styled.div`
  color: #1d1d1d;
  font-family: 'SCDreamMedium';
  font-size: 15px;
  margin-left: 20px;
`;

export const ReviewContent = styled.div`
  color: #1d1d1d;
  font-family: 'SCDreamRegular';
  font-size: 15px;
  margin-left: 20px;
  margin-top: 17px;
`;

export const SubmitReview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-family: 'SCDreamRegular';
  margin-bottom: 20px;
`;

export const ReviewContentInput = styled.input`
  font-size: 15px;
  color: #919191;
  font-family: 'SCDreamMedium';
  width: 200px;
  background: #ffffff;
  box-shadow: inset 5px 5px 13px #d9d9d9, inset -9px -9px 17px #ffffff;
  border: none;
  padding: 10px;
  text-align: center;
  border-radius: 18px;
  margin-bottom: 20px;
  :focus::placeholder {
    color: transparent;
    transition: 0.4s;
    border-color: transparent;
  }
`;

export const ReviewInputBlock = styled.div`
  display: flex;
  width: 500px;
  height: 200px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
  border-radius: 26px;
  margin-bottom: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 200px;
  height: 40px;
  color: black;
  font-size: 15px;
  font-family: 'SCDreamRegular';
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  :hover {
    transition: 1s;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.4);
  }
`;
