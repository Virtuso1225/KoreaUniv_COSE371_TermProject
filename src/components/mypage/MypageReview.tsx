import React from 'react';
import MypageOption from './MypageOption';
import {
  ReviewBlock,
  ReviewContent,
  ReviewWrapper,
  UserId,
} from './MypageReviewStyle';

const MypageReview: React.FC = () => {
  return (
    <>
      <MypageOption />
      <ReviewWrapper>
        <ReviewBlock>
          <UserId>char_smine</UserId>
          <ReviewContent>사진 너무 친절하게 잘 찍어주셔요!!</ReviewContent>
        </ReviewBlock>
        <ReviewBlock>
          <UserId>char_smine</UserId>
          <ReviewContent>사진 너무 친절하게 잘 찍어주셔요!!</ReviewContent>
        </ReviewBlock>
        <ReviewBlock>
          <UserId>char_smine</UserId>
          <ReviewContent>사진 너무 친절하게 잘 찍어주셔요!!</ReviewContent>
        </ReviewBlock>
        <ReviewBlock>
          <UserId>char_smine</UserId>
          <ReviewContent>사진 너무 친절하게 잘 찍어주셔요!!</ReviewContent>
        </ReviewBlock>
      </ReviewWrapper>
    </>
  );
};

export default MypageReview;
