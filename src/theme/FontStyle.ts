import { createGlobalStyle } from 'styled-components';
import SCDreamThin from '../assets/fonts/SCDream1.otf';
import SCDreamExtraLight from '../assets/fonts/SCDream2.otf';
import SCDreamLight from '../assets/fonts/SCDream3.otf';
import SCDreamRegular from '../assets/fonts/SCDream4.otf';
import SCDreamMedium from '../assets/fonts/SCDream5.otf';
import SCDreamBold from '../assets/fonts/SCDream6.otf';
import SCDreamBlack from '../assets/fonts/SCDream9.otf';

const FontStyles = createGlobalStyle`

  @font-face {
    font-family: 'SCDreamThin';
    src: url(${SCDreamThin});
  }

  @font-face {
    font-family: 'SCDreamExtraLight';
    src: url(${SCDreamExtraLight});
  }

  @font-face {
    font-family: 'SCDreamLight';
    src: url(${SCDreamLight});
  }

  @font-face {
    font-family: 'SCDreamRegular';
    src: url(${SCDreamRegular});
  }

  @font-face {
    font-family: 'SCDreamMedium';
    src: url(${SCDreamMedium});
  }

  @font-face {
    font-family: 'SCDreamBold';
    src: url(${SCDreamBold});
  }

  @font-face {
    font-family: 'SCDreamBlack';
    src: url(${SCDreamBlack});
  }
`;

export default FontStyles;
