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
      <input
        type="checkbox"
        name="is-completed"
        id="is-completed"
        checked={is_completed}
        onChange={() => handleTodoComplete(listId)}
      />
      <p {...provided.dragHandleProps}>{title}</p>
      {!is_completed && (
        <a onClick={() => handleTodoDelete(listId)}>
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
