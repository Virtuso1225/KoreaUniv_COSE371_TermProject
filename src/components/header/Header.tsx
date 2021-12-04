import React from 'react';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderWrapper,
  PageLink,
  Search,
} from './HeaderStyle';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle to="/">PICFast</HeaderTitle>
        <Search placeholder="검색하기" />
        <PageLink to="/reserve">예약</PageLink>
        <PageLink to="/place">핫플레이스</PageLink>
        <PageLink to="/mypage">마이페이지</PageLink>
      </HeaderWrapper>
    </HeaderContainer>
  );
};

export default Header;
