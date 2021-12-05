import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  width: 1094px;
  height: 60px;
  border-radius: 36px;
  margin-top: 30px;
  display: flex;
  align-items: center;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16), -10px -10px 20px #ffffff;
  justify-content: space-around;
  padding-left: 50px;
  padding-right: 50px;
`;

export const HeaderTitle = styled(Link)`
  font-size: 28px;
  color: #919191;
  font-family: 'SCDreamBold';
  :hover {
    color: #1d1d1d;
    transition: 1s;
  }
  text-decoration: none;
`;

export const PageLink = styled(Link)`
  font-size: 18px;
  color: #919191;
  font-family: 'SCDreamMedium';
  :hover {
    color: #1d1d1d;
    transition: 1s;
  }
  text-decoration: none;
`;

export const Search = styled.input`
  font-size: 18px;
  color: #919191;
  font-family: 'SCDreamMedium';
  width: 400px;
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
