import React, { useState } from 'react';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import { DateSearch } from '../reservation/ReservationStyle';
import { ReservePopButton, ReserveSubmitButton } from './MypageReserveStyle';

const MypageReserve: React.FC = () => {
  const params = useParams();
  const current = params.user_id;
  const [isOpen, setIsOpen] = useState(false);
  const [alerts, setAlerts] = useState(false);
  const [input, setInput] = useState('');
  const onClick = () => {
    setIsOpen(!isOpen);
  };
  const submitAlert = () => {
    if (input !== '') {
      setIsOpen(false);
      fetch('http://localhost:3001/post/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: current,
          date: input,
        }),
      })
        .then((res) => {
          console.log(res);
          if (res.status === 500) {
            throw new Error('중복된 날짜 입니다.');
          }
          return res;
        })
        .then((data) => data.status)
        .then((data) => {
          if (data === 200) {
            setAlerts(true);
          }
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      alert('값이 입력되지 않은 상태입니다.');
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  return (
    <>
      <Modal
        isOpen={alerts}
        onRequestClose={() => {
          setAlerts(false);
          setInput('');
        }}
        style={{
          overlay: {
            zIndex: 10,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
          },
          content: {
            position: 'absolute',
            top: '400px',
            left: '700px',
            right: '700px',
            bottom: '400px',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '30px',
            outline: 'none',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
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
          등록이 완료되었습니다.
        </div>
      </Modal>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
          setInput('');
        }}
        style={{
          overlay: {
            zIndex: 10,
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
          },
          content: {
            position: 'absolute',
            top: '300px',
            left: '600px',
            right: '600px',
            bottom: '300px',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '30px',
            outline: 'none',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
          },
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <DateSearch
            placeholder="날짜를 입력해주세요 (2021.11.01.)"
            onChange={onChange}
            value={input}
          />
          <ReserveSubmitButton onClick={submitAlert}>
            등록하기
          </ReserveSubmitButton>
        </div>
      </Modal>
      <ReservePopButton onClick={onClick}>일정 등록하기</ReservePopButton>
    </>
  );
};

export default MypageReserve;
