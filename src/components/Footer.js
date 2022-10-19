import { StyledFooter } from "./styles/Footer.styled";

const Footer = ({ newTodo, setNewTodo, newTodoError, handleTodoSubmit }) => {
  return (
    <StyledFooter>
      <input
        type="text"
        placeholder="What we have to do?"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleTodoSubmit(newTodo);
          }
        }}
      />
      <a href="#" onClick={() => handleTodoSubmit(newTodo)}>
        Add
      </a>
      {newTodoError && <small>{newTodoError}</small>}
    </StyledFooter>
  );
};

export default Footer;
