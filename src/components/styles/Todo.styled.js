import styled from "styled-components";

export const StyledTodo = styled.div`
  display: flex;
  gap: 13px;

  svg:first-child {
    min-width: 19px;
    min-height: 20px;
  }

  svg:last-child {
    margin-top: 4px;
    min-width: 11px;
    min-height: 11px;
  }

  p {
    font-size: 14px;
    padding-top: 1px;
    text-decoration: ${({ is_completed }) => is_completed && "line-through;"};
    color: ${({ is_completed }) => is_completed && "#BCBCBC;"};
  }
`;
