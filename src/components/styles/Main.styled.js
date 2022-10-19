import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.colors.main};
  padding: 6px 19px;
  overflow-x: hidden;
  overflow-y: auto;
  > div > div {
    margin-bottom: 15px;
  }
`;
