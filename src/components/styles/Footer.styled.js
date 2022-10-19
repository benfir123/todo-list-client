import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  font-weight: bold;
  font-size: 14px;
  margin-top: auto;
  padding: 20px;
  border-radius: 0px 0px 20px 20px;
  display: flex;
  justify-content: space-between;
  position: relative;

  a {
    color: ${({ theme }) => theme.colors.button};
    text-decoration: none;
  }

  input {
    font-weight: inherit;
    background-color: transparent;
    border: 0px transparent solid;
  }
  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #c4c4c4;
  }
  small {
    font-size: xx-small;
    color: #ff7575;
    position: absolute;
    bottom: 15%;
    left: 8%;
    font-weight: 400;
  }
`;
