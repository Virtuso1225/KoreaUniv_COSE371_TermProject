import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import { DateText, DateWrapper, ReservePopButton } from './MypageReserveStyle';

interface dateProps {
  id: number;
  date: string;
  concept: string;
  pay: string;
}

const MypageReserveDelete: React.FC = () => {
  const params = useParams();
  const current = params.user_id;
  const [isOpen, setIsOpen] = useState(false);
  const [dates, setDates] = useState<dateProps[]>([]);
  const [init, setInit] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
    fetch(`http://localhost:3001/get/reserved/${current}`)
      .then((res) => res.json())
      .then((data: dateProps[]) => {
        setDates(data);
      })
      .then(() => {
        setInit(true);
      });
  };

  const deleteClick = (date: string) => {
    fetch(`http://localhost:3001/delete/date/${current}/${date}`, {
      method: 'DELETE',
    })
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        setIsOpen(false);
      });
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          setIsOpen(false);
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
            bottom: '80px',
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
        {init ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {dates.map((date) => (
              <DateWrapper key={date.id}>
                <DateText>{date?.date}</DateText>
                <button
                  type="button"
                  style={{
                    cursor: 'pointer',
                    border: 'none',
                    background: 'none',
                  }}
                  onClick={() => {
                    deleteClick(date?.date);
                  }}
                >
                  <AiFillDelete size="20" />
                </button>
              </DateWrapper>
            ))}
          </div>
        ) : (
          ''
        )}
      </Modal>
      <ReservePopButton onClick={onClick}>일정 삭제하기</ReservePopButton>
    </>
  );
};

export default MypageReserveDelete;
