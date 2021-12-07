/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
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

interface commentProps {
  comment_id: number;
  commentor_id: string;
  photographer_id: string;
  rate: string;
  content: string;
}
const MypageReview: React.FC = () => {
  const [comments, setComments] = useState<commentProps[]>([]);
  const [init, setInit] = useState(false);
  const params = useParams();
  const current = params.user_id;
  useEffect(() => {
    fetch(`http://localhost:3001/review/${current}`)
      .then((res) => res.json())
      .then((data: commentProps[]) => {
        setComments(data);
      })
      .then(() => {
        setInit(true);
      });
  }, []);
  return (
    <>
      <MypageOption />
      {init ? (
        <ReviewWrapper>
          {comments.map((comment) => (
            <ReviewBlock key={comment.comment_id}>
              <RowWrapper>
                <UserId>{comment.commentor_id}</UserId>
                <RateWrapper>
                  <AiFillStar size="20" style={{ marginRight: '10' }} />
                  <BoldText>{comment.rate}</BoldText>
                </RateWrapper>
              </RowWrapper>
              <ReviewContent>{comment.content}</ReviewContent>
            </ReviewBlock>
          ))}
        </ReviewWrapper>
      ) : (
        ''
      )}
    </>
  );
};

export default MypageReview;
