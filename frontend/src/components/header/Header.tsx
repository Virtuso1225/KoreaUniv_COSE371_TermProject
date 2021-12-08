import React from 'react';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderWrapper,
  MypageLink,
  PageLink,
  Search,
} from './HeaderStyle';

const Header: React.FC = () => {
  const projectClick = () => {
    window.location.href = '/char_kak';
  };
  const toMainpage = () => {
    window.location.href = '/';
  };
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle onClick={toMainpage}>PICFast</HeaderTitle>
        <Search placeholder="검색하기" />
        <PageLink to="/reserve">예약</PageLink>
        <PageLink to="/place">핫플레이스</PageLink>
        {/* <PageLink to="/char_kak">마이페이지</PageLink> */}
        <MypageLink onClick={projectClick}>마이페이지</MypageLink>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
