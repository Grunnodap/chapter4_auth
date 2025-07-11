import styled from 'styled-components';

// 📦 Header
export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.black};

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.layout.gapDefault};
  }
`;

// 📄 리스트 스타일
export const StyledList = styled.ul`
  li {
    list-style: none;
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSize.regular};
  }
`;

// 📚 섹션 레이아웃
export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.layout.gapDefault};
  padding: ${({ theme }) => theme.layout.paddingSection};
`;

// 📄 콘텐츠 박스
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  img {
    width: ${({ theme }) => theme.layout.imgWidth};
    border-radius: 10px;
    margin-bottom: 3px;
  }

  span {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    padding: 4px 5px;
    border-radius: 3px;
  }

  div {
    font-size: ${({ theme }) => theme.fontSize.large};
    font-weight: 600;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;
