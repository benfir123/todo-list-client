import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  margin-bottom: 32px;
  margin: 26px 19px;
  h2 {
    color: ${({ theme }) => theme.colors.heading};
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    font-style: italic;
    font-size: 12px;
  }
  svg {
    margin-top: 3px;
  }
`;
