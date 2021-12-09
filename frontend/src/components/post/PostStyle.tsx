import styled from 'styled-components';

export const PostCard = styled.div`
  display: flex;
  width: 600px;
  height: 600px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  flex-direction: column;
  background-color: #fff;
`;

export const PostCommentCard = styled.div`
  display: flex;
  width: 300px;
  height: 180px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  margin-left: 30px;
  flex-direction: column;
  background-color: #fff;
`;

export const PostHeader = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  padding-left: 30px;
  flex-direction: row;
`;

export const PostCommentHeader = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  padding-left: 20px;
`;

export const PostTitle = styled.div`
  color: #1d1d1d;
  font-family: 'SCDreamRegular';
  font-size: 15px;
  margin-left: 20px;
`;

export const PostContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 0 20px;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;
export const PlaceTitle = styled.div`
  color: #1d1d1d;
  font-family: 'SCDreamRegular';
  font-size: 15px;
  margin-left: 20px;
`;

export const UserImg = styled.img`
  display: flex;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 18px;
  margin-right: 20px;
`;

export const UserName = styled.div`
  display: flex;
  color: #1d1d1d;
  font-family: 'SCDreamMedium';
  font-size: 16px;
  text-decoration: none;
`;

export const PostImg = styled.img`
  width: 100%;
  height: 530px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

export const PhotographerCard = styled.div`
  display: flex;
  width: 300px;
  height: 290px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  margin-left: 30px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

export const ModelCard = styled.div`
  display: flex;
  width: 300px;
  height: 290px;
  box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15);
  border-radius: 30px;
  margin-left: 30px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`;

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Delete = styled.div`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;
  font-family: 'SCDreamRegular';
  margin-left: 350px;
`;
