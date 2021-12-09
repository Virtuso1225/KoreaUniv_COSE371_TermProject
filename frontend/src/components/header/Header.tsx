/* eslint-disable camelcase */
import React, { useState } from 'react';
import Modal from 'react-modal';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderWrapper,
  MypageLink,
  PageLink,
  ResultProfile,
  ResultRowWrapper,
  ResultUser,
  Search,
  SearchBox,
} from './HeaderStyle';

interface profileProps {
  id: string;
  profile_img: string;
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
        console.log(data);
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
          <MypageLink onClick={projectClick}>마이페이지</MypageLink>
        </HeaderWrapper>
      </HeaderContainer>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            top: 60,
            left: -100,
            right: 0,
            bottom: 0,
            backgroundColor: 'transparent',
            zIndex: 0,
            transition: '2s',
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
            display: 'flex',
            justifyContent: 'center',
            boxShadow: '6px 6px 12px rgba(0,0,0,0.1)',
            transition: '1s',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {init ? (
            <>
              {results.map((result) => (
                <div key={result.id}>
                  {input ? (
                    <ResultRowWrapper
                      onClick={() => {
                        window.location.href = `${result?.id}`;
                      }}
                    >
                      <ResultProfile src={result?.profile_img} />
                      <ResultUser>{result?.id}</ResultUser>
                    </ResultRowWrapper>
                  ) : (
                    ''
                  )}
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
