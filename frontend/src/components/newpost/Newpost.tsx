/* eslint-disable camelcase */
import React, { useEffect, useRef, useState } from 'react';
import {
  FileButton,
  Inputs,
  NewpostButton,
  NewpostCard,
  NewpostWrapper,
  SubmitButton,
} from './NewpostStyle';

interface placeProps {
  place_id: number;
}

interface cameraProps {
  camera_id: number;
}

interface picInfoProps {
  pic_info_id: number;
}

const Newpost: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photographer, setPhotographer] = useState('');
  const [model, setModel] = useState('');
  const [place, setPlace] = useState('');
  const [date, setDate] = useState('');
  const [camera, setCamera] = useState('');
  const [manu, setManu] = useState('');
  const [pId, setPId] = useState(0);
  const [cId, setCId] = useState(0);
  const [picInfoId, setPicInfoId] = useState<picInfoProps>();
  const [pic, setPic] = useState<any>();
  const [inserted, setInserted] = useState(false);
  const onClick = () => {
    window.location.href = '/';
  };

  const convertToBase64 = (file: any) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const img = e.target.files ? e.target.files[0] : new File([], 'img');
    const temp = await convertToBase64(img);
    setPic(temp);
  };

  const fileInput = useRef<any>(null);

  const PostSubmit = () => {
    fetch('http://localhost:3001/create/init', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        photographer,
        model,
        place,
        date,
        camera,
        manu,
      }),
    })
      .then((response) => {
        fetch('http://localhost:3001/create/place', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            place,
          }),
        })
          .then((res) => res.json())
          .then((data: placeProps[]) => {
            setPId(data[0]?.place_id);
            console.log(data[0]);
          });
        return response;
      })
      .then((response) => {
        fetch('http://localhost:3001/create/camera', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            camera,
            manu,
          }),
        })
          .then((res) => res.json())
          .then((data: cameraProps[]) => {
            setCId(data[0]?.camera_id);
            console.log(data[0]);
          });
        return response;
      })
      .then((response) => {
        return response.text();
      })
      .then((data) => {
        alert(data);
      })
      .then(() => setInserted(true));
  };

  useEffect(() => {
    if (inserted) {
      console.log(inserted);
      fetch('http://localhost:3001/create/pictureinfo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          photographer,
          model,
          pId,
          cId,
          date,
        }),
      })
        .then((response) => {
          fetch('http://localhost:3001/create/picinfoid', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              photographer,
              model,
              pId,
              cId,
              date,
            }),
          })
            .then((res) => res.json())
            .then((data: picInfoProps[]) => {
              setPicInfoId(data[0]);
              console.log(data[0]);
            });
          return response;
        })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
          alert(data);
        });
    }
  }, [inserted]);

  return (
    <>
      <NewpostButton onClick={onClick}>x</NewpostButton>
      <NewpostWrapper>
        <NewpostCard>
          <form>
            <input
              type="file"
              ref={fileInput}
              accept="image/jpg,impge/png,image/jpeg,image/gif"
              name="profile_img"
              onChange={onChange}
              style={{ display: 'none' }}
            />
            <FileButton onClick={() => fileInput?.current.click()}>
              파일을 선택
            </FileButton>
          </form>
          <Inputs
            placeholder="작가 아이디"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPhotographer(e.target.value);
            }}
            value={photographer}
          />
          <Inputs
            placeholder="모델 아이디"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setModel(e.target.value);
            }}
            value={model}
          />
          <Inputs
            placeholder="장소 이름"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPlace(e.target.value);
            }}
            value={place}
          />
          <Inputs
            placeholder="사진의 날짜"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setDate(e.target.value);
            }}
            value={date}
          />
          <Inputs
            placeholder="카메라 기종"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setCamera(e.target.value);
            }}
            value={camera}
          />
          <Inputs
            placeholder="카메라 제조사"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setManu(e.target.value);
            }}
            value={manu}
          />
          <SubmitButton onClick={PostSubmit}>게시물 추가</SubmitButton>
        </NewpostCard>
      </NewpostWrapper>
    </>
  );
};

export default Newpost;
