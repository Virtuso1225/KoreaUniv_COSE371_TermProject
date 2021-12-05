import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import MypageOption from './MypageOption';
import { BoldText } from './MypageProfileStyle';
import {
  RateWrapper,
  ReviewBlock,
  ReviewContent,
  ReviewWrapper,
  RowWrapper,
  UserId,
} from './MypageReviewStyle';

const MypageReview: React.FC = () => {
  return (
    <>
      <MypageOption />
      <ReviewWrapper>
        <ReviewBlock>
          <RowWrapper>
            <UserId>char_smine</UserId>
            <RateWrapper>
              <AiFillStar size="20" style={{ marginRight: '10' }} />
              <BoldText>4.5</BoldText>
            </RateWrapper>
          </RowWrapper>
          <ReviewContent>사진 너무 친절하게 잘 찍어주셔요!!</ReviewContent>
        </ReviewBlock>
        <ReviewBlock>
          <RowWrapper>
            <UserId>char_smine</UserId>
            <RateWrapper>
              <AiFillStar size="20" style={{ marginRight: '10' }} />
              <BoldText>4.5</BoldText>
            </RateWrapper>
          </RowWrapper>
          <ReviewContent>사진 너무 친절하게 잘 찍어주셔요!!</ReviewContent>
        </ReviewBlock>
        <ReviewBlock>
          <RowWrapper>
            <UserId>char_smine</UserId>
            <RateWrapper>
              <AiFillStar size="20" style={{ marginRight: '10' }} />
              <BoldText>4.5</BoldText>
            </RateWrapper>
          </RowWrapper>
          <ReviewContent>사진 너무 친절하게 잘 찍어주셔요!!</ReviewContent>
        </ReviewBlock>
        <ReviewBlock>
          <RowWrapper>
            <UserId>char_smine</UserId>
            <RateWrapper>
              <AiFillStar size="20" style={{ marginRight: '10' }} />
              <BoldText>4.5</BoldText>
            </RateWrapper>
          </RowWrapper>
          <ReviewContent>사진 너무 친절하게 잘 찍어주셔요!!</ReviewContent>
        </ReviewBlock>
      </ReviewWrapper>
    </>
  );
};

export default MypageReview;
