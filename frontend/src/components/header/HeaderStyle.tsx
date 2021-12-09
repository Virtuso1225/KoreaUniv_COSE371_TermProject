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
  display: flex;
  align-items: center;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
  justify-content: space-around;
  padding-left: 50px;
  padding-right: 50px;
  background-color: white;
  position: fixed;
  z-index: 5;
`;

export const HeaderTitle = styled.div`
  font-size: 28px;
  color: #919191;
  font-family: 'SCDreamBold';
  :hover {
    color: #1d1d1d;
    transition: 1s;
  }
  text-decoration: none;
  cursor: pointer;
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

export const MypageLink = styled.div`
  font-size: 18px;
  color: #919191;
  font-family: 'SCDreamMedium';
  :hover {
    color: #1d1d1d;
    transition: 1s;
  }
  text-decoration: none;
  cursor: pointer;
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

interface viewProps {
  isSelected: boolean;
}
export const SearchBox = styled.div<viewProps>`
  display: ${(props) => (props.isSelected ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 500px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.16);
  z-index: 1;
`;

export const ResultRowWrapper = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  width: 413px;
  cursor: pointer;
  :hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const ResultProfile = styled.img`
  display: flex;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 18px;
  margin-right: 100px;
`;

export const ResultUser = styled.div`
  display: flex;
  color: #1d1d1d;
  font-family: 'SCDreamRegular';
  font-size: 15px;
`;
