/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillStar, AiOutlinePlus } from 'react-icons/ai';
import { useParams } from 'react-router-dom';
import MypageOption from './MypageOption';
import { BoldText } from './MypageProfileStyle';
import {
  RateWrapper,
  ReviewBlock,
  ReviewContent,
  ReviewContentInput,
  ReviewWrapper,
  RowWrapper,
  SubmitReview,
  UserId,
  ReviewInputBlock,
  SubmitButton,
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
  const [show, setShow] = useState(false);
  const [input, setInput] = useState('');
  const [rate, setRate] = useState(0);
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

  const reviewSubmit = () => {
    setShow(!show);
  };
  const onChangeReview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const onChangeRate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRate(e.target.valueAsNumber);
  };

  const submitHandler = () => {
    fetch('http://localhost:3001/post/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Commentor_id: 'char_kak',
        photographer_id: current,
        Rate: rate,
        Content: input,
      }),
    }).then(() => {
      setShow(!show);
      window.location.href = `/${current}/review`;
    });
  };

  const deleteHandler = (comment_id: number) => {
    fetch(`http://localhost:3001/comment/delete/${comment_id}`, {
      method: 'DELETE',
    }).then((data) => {
      console.log(data);
      window.location.href = `/${current}/review`;
    });
  };
  return (
    <>
      <MypageOption />
      {init ? (
        <ReviewWrapper>
          {current !== 'char_kak' ? (
            <SubmitReview onClick={reviewSubmit}>
              {!show ? <AiOutlinePlus size="20" color="black" /> : 'x'}
            </SubmitReview>
          ) : (
            ''
          )}
          {show ? (
            <ReviewInputBlock>
              <ReviewContentInput
                placeholder="리뷰 내용을 입력하세요"
                onChange={onChangeReview}
                value={input}
              />
              <ReviewContentInput
                placeholder="평점을 입력하세요"
                onChange={onChangeRate}
                value={rate}
                type="number"
              />
              <SubmitButton onClick={submitHandler}>등록하기</SubmitButton>
            </ReviewInputBlock>
          ) : (
            ''
          )}
          {comments.map((comment) => (
            <ReviewBlock key={comment.comment_id}>
              <RowWrapper>
                <UserId>{comment.commentor_id}</UserId>
                <RateWrapper>
                  <AiFillStar size="20" style={{ marginRight: '10' }} />
                  <BoldText>{comment.rate}</BoldText>
                  {current !== 'char_kak' ? (
                    <button
                      type="button"
                      style={{
                        marginLeft: '3px',
                        cursor: 'pointer',
                        background: 'none',
                        border: 'none',
                      }}
                      onClick={() => deleteHandler(comment.comment_id)}
                    >
                      <AiFillDelete size="20" />
                    </button>
                  ) : (
                    ''
                  )}
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
