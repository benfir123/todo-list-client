import styled from "styled-components";

export const StyledMain = styled.main`
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 6px 19px;
  overflow-x: hidden;
  overflow-y: auto;
`;
