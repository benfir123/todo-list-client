import { StyledTodo } from "./styles/Todo.styled";

const Todo = ({
  title,
  is_completed,
  provided,
  innerRef,
  handleTodoDelete,
  handleTodoComplete,
  isDragging,
  listId,
}) => {
  return (
    <StyledTodo
      is_completed={is_completed}
      {...provided.draggableProps}
      isDragging={isDragging}
      ref={innerRef}
    >
      {is_completed ? (
        <a href="#" onClick={() => handleTodoComplete(listId)}>
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.9643 0.375H2.03571C0.911406 0.375 0 1.2984 0 2.4375V17.5625C0 18.7016 0.911406 19.625 2.03571 19.625H16.9643C18.0886 19.625 19 18.7016 19 17.5625V2.4375C19 1.2984 18.0886 0.375 16.9643 0.375ZM16.9643 17.5625H2.03571V2.4375H16.9643V17.5625ZM15.4433 7.17592L8.12364 14.5323C7.9241 14.7329 7.60187 14.7316 7.40393 14.5294L3.55385 10.5971C3.35592 10.3949 3.35719 10.0684 3.55677 9.86787L4.5203 8.89953C4.71985 8.69899 5.04208 8.70028 5.24001 8.90249L7.77583 11.4925L13.7707 5.46761C13.9702 5.26708 14.2925 5.26837 14.4904 5.47054L15.4462 6.4467C15.6441 6.64891 15.6428 6.97539 15.4433 7.17592Z"
              fill="#BCBCBC"
            />
          </svg>
        </a>
      ) : (
        <a href="#" onClick={() => handleTodoComplete(listId)}>
          <svg
            width="19"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1"
              y="1"
              width="18"
              height="18"
              rx="1"
              fill="#FFFEFE"
              stroke="#BCBCBC"
              strokeWidth="2.2"
            />
          </svg>
        </a>
      )}
      <p {...provided.dragHandleProps}>{title}</p>
      {!is_completed && (
        <a href="#" onClick={() => handleTodoDelete(listId)}>
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.323125 9.70547C-0.106563 10.1449 -0.106563 10.8568 0.323125 11.2963C0.536249 11.516 0.818125 11.625 1.1 11.625C1.38188 11.625 1.66306 11.5151 1.87756 11.2954L5.5 7.59258L9.12209 11.2945C9.33694 11.516 9.61847 11.625 9.9 11.625C10.1815 11.625 10.4627 11.516 10.6777 11.2945C11.1074 10.8551 11.1074 10.1432 10.6777 9.70371L7.05461 5.99825L10.6777 2.29453C11.1074 1.85508 11.1074 1.14317 10.6777 0.703713C10.248 0.264259 9.55195 0.264259 9.12227 0.703713L5.5 4.41094L1.87687 0.70547C1.44719 0.266017 0.751094 0.266017 0.321406 0.70547C-0.108281 1.14492 -0.108281 1.85684 0.321406 2.29629L3.94453 6.00176L0.323125 9.70547Z"
              fill="black"
            />
          </svg>
        </a>
      )}
    </StyledTodo>
  );
};

export default Todo;
