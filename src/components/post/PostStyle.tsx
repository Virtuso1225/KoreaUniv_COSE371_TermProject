import styled from 'styled-components';

export const PostCard = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  flex-direction: column;
`;

export const PostComment = styled.div`
  display: flex;
  width: 300px;
  height: 600px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  margin-left: 30px;
  flex-direction: column;
`;

export const PostHeader = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  padding-left: 30px;
`;

export const UserImg = styled.img`
  display: flex;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 18px;
`;

export const UserName = styled.div`
  display: flex;
  color: #1d1d1d;
  font-family: 'SCDreamMedium';
  font-size: 16px;
  margin-left: 20px;
  text-decoration: none;
`;

export const PostImg = styled.img`
  width: 100%;
  height: 530px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;
