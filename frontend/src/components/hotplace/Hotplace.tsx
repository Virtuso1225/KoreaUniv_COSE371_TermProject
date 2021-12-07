/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { AiFillFire } from 'react-icons/ai';
import {
  BackgroundWrapper,
  Content,
  HotplaceTag,
  RowWrapper,
  Title,
} from './HotplaceStyle';

interface placeProps {
  place_id: number;
  place_name: string;
  post_num: number;
}
const Hotplace = () => {
  const [places, setPlaces] = useState<placeProps[]>([]);
  const [init, setInit] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/place')
      .then((res) => res.json())
      .then((data: placeProps[]) => {
        setPlaces(data);
      })
      .then(() => {
        setInit(true);
      });
  }, []);
  return (
    <BackgroundWrapper>
      {init ? (
        <>
          {places.map((place) => (
            <div key={place.place_id}>
              {place.post_num ? (
                <HotplaceTag>
                  <RowWrapper>
                    <AiFillFire size="20" />
                    <Title>{place.place_name}</Title>
                  </RowWrapper>
                  <Content>활용된 게시물 수: {place.post_num}</Content>
                </HotplaceTag>
              ) : (
                ''
              )}
            </div>
          ))}
        </>
      ) : (
        ''
      )}
    </BackgroundWrapper>
  );
};

export default Hotplace;
