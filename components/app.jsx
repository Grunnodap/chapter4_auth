import { ThemeProvider } from 'styled-components';
import theme from './theme';
import {
  HeaderContainer,
  StyledList,
  Section,
  ContentContainer,
} from './StyledComponents';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderContainer>
        <div>Logo</div>
        <StyledList>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </StyledList>
      </HeaderContainer>

      <Section>
        <ContentContainer>
          <img src="https://via.placeholder.com/300" alt="sample" />
          <span>Tag</span>
          <div>Title Here</div>
          <p>Subtitle or description here</p>
        </ContentContainer>
        {/* 반복될 콘텐츠들 */}
      </Section>
    </ThemeProvider>
  );
}

export default App;
