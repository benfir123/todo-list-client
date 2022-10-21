import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  font-weight: bold;
  font-size: 14px;
  margin-top: auto;
  padding: 20px;
  border-radius: 0px 0px 20px 20px;

  form {
    display: flex;
    justify-content: space-between;
  }

  button {
    color: ${({ theme }) => theme.colors.button};
    text-decoration: none;
    background-color: transparent;
    border: 0px transparent solid;
    cursor: pointer;
    font-weight: bold;
  }

  button:hover {
    filter: brightness(90%);
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
