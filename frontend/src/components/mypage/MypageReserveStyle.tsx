import styled from 'styled-components';

export const ReservePopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 180px;
  height: 40px;
  color: black;
  font-size: 15px;
  font-family: 'SCDreamRegular';
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
  cursor: pointer;
  margin-right: 20px;
  :hover {
    transition: 1s;
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const ReserveSubmitButton = styled.div`
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

export const DateSearch = styled.input`
  font-size: 15px;
  color: #919191;
  font-family: 'SCDreamMedium';
  width: 200px;
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

export const DateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: 200px;
  height: 40px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
  margin-bottom: 20px;
`;

export const DateText = styled.div`
  display: flex;
  color: black;
  font-size: 15px;
  font-family: 'SCDreamRegular';
  margin-right: 20px;
`;
