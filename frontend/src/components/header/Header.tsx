/* eslint-disable camelcase */
import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderWrapper,
  MypageLink,
  PageLink,
  Search,
  SearchBox,
} from './HeaderStyle';

interface profileProps {
  id: string;
  proflie_img: string;
}

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [init, setInit] = useState(false);
  const [results, setResults] = useState<profileProps[]>([]);
  const projectClick = () => {
    window.location.href = '/char_kak';
  };
  const toMainpage = () => {
    window.location.href = '/';
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    fetch(`http://localhost:3001/searchuser/${e.target.value}`)
      .then((res) => res.json())
      .then((data: profileProps[]) => {
        setResults(data);
      })
      .then(() => {
        setInit(true);
      });
  };
  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderTitle onClick={toMainpage}>PICFast</HeaderTitle>
          <Search
            placeholder="검색하기"
            onChange={onChange}
            onClick={() => setIsOpen(true)}
          />
          <PageLink to="/reserve">예약</PageLink>
          <PageLink to="/place">핫플레이스</PageLink>
          {/* <PageLink to="/char_kak">마이페이지</PageLink> */}
          <MypageLink onClick={projectClick}>마이페이지</MypageLink>
        </HeaderWrapper>
      </HeaderContainer>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: 80,
            left: -100,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
            zIndex: 0,
          },
          content: {
            zIndex: 0,
            position: 'absolute',
            left: '600px',
            right: '700px',
            bottom: '300px',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '4px',
            outline: 'none',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
            boxShadow: '6px 6px 12px rgba(0,0,0,0.1)',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {init ? (
            <>
              {results.map((result) => (
                <div key={result.id}>
                  {input ? <div>{result?.id}</div> : ''}
                </div>
              ))}
            </>
          ) : (
            ''
          )}
        </div>
      </Modal>
    </>
  );
};

export default Header;
