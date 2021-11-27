import React from 'react';
import {
  BackgroundWrapper,
  SelectionCard,
  SubwayPageButton,
  StarbucksPageButton,
} from './SelectionStyle';

const Selection: React.FC = () => {
  return (
    <BackgroundWrapper>
      <SelectionCard>
        <SubwayPageButton>Subway</SubwayPageButton>
        <StarbucksPageButton>Starbucks</StarbucksPageButton>
      </SelectionCard>
    </BackgroundWrapper>
  );
};

export default Selection;
