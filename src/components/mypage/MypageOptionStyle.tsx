import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface SelectedPage {
  isSelected: boolean;
}
export const BottomWrapper = styled.div`
  display: flex;
  width: 1194px;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  margin-top: 20px;
`;

export const ButtonLink = styled(Link)<SelectedPage>`
  display: flex;
  color: ${(props) => (props.isSelected ? '#1d1d1d' : 'gray')};
  font-family: 'SCDreamRegular';
  font-size: 15px;
  text-decoration: none;
`;
