import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import { BackgroundWrapper, SelectionCard } from './MainStyle';

interface UserProps {
  id: string;
  password: string;
  type: 'Model' | 'Photographer';
}

const Main: React.FC = () => {
  const [users, setUsers] = useState<UserProps[]>([]);

  const getUsers = async () => {
    await fetch('http://localhost:3001')
      .then((res) => res.json())
      .then((data: UserProps[]) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <BackgroundWrapper>
      <SelectionCard>
        <Post users={users} />
      </SelectionCard>
      {/* <SelectionCard>
        <Post />
      </SelectionCard>
      <SelectionCard>
        <Post />
      </SelectionCard>
      <SelectionCard>
        <Post />
      </SelectionCard> */}
    </BackgroundWrapper>
  );
};

export default Main;
