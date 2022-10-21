import { StyledFooter } from "./styles/Footer.styled";

const Footer = ({ handleTodoSubmit }) => {
  return (
    <StyledFooter>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let newTodo = document.getElementById("new-todo-input").value;
          handleTodoSubmit(newTodo);
          let newTodoForm = document.getElementById("new-todo-form");
          newTodoForm.reset();
        }}
        id="new-todo-form"
      >
        <input
          type="text"
          id="new-todo-input"
          placeholder="What we have to do?"
          minLength={1}
          maxLength={200}
          required
        />
        <button type="submit">Add</button>
      </form>
    </StyledFooter>
  );
};

export default Footer;
