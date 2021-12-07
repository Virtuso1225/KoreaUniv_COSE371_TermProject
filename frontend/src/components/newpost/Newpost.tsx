import React, { useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from 'react-modal';
import { NewpostButton } from './NewpostStyle';

type Inputs = {
  example: FormData;
};

const Newpost: React.FC = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen(true);
  };
  const handleReturn = () => {
    navigate(-1);
  };
  const { register } = useForm<Inputs>();

  const [input, setInput] = useState('');
  const [init, setInit] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => {
          handleReturn();
          setIsOpen(false);
        }}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
          },
          content: {
            position: 'absolute',
            top: '100px',
            left: '400px',
            right: '400px',
            bottom: '100px',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '10px',
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
          <input
            placeholder="날짜 검색하기 (형식: 2021.11.02.)"
            onChange={onChange}
            value={input}
          />
        </div>
      </Modal>
      <NewpostButton onClick={onClick}>
        <AiOutlinePlus size="20" color="black" />
      </NewpostButton>
    </>
  );
};

export default Newpost;
