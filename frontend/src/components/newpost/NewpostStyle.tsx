import styled from 'styled-components';

export const NewpostButton = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
  top: 40px;
  right: 100px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-family: 'SCDreamRegular';
`;

export const NewpostWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const NewpostCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 700px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
  border-radius: 40px;
  flex-direction: column;
`;

export const FileButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 40px;
  border-radius: 18px;
  background: #ffffff;
  font-size: 15px;
  color: #919191;
  font-family: 'SCDreamMedium';
  box-shadow: inset 5px 5px 13px #d9d9d9, inset -9px -9px 17px #ffffff;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Inputs = styled.input`
  font-size: 15px;
  color: #919191;
  font-family: 'SCDreamMedium';
  width: 100px;
  height: 10px;
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
  margin-bottom: 20px;
`;

export const SubmitButton = styled.div`
  margin-top: 20px;
  display: flex;
  font-size: 20px;
  color: white;
  font-family: 'SCDreamMedium';
  width: 180px;
  height: 60px;
  border-radius: 30px;
  background: #7fa9cf;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16), -18px -18px 36px #ffffff;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
