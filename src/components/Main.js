import { StyledMain } from "./styles/Main.styled";
import Todo from "./Todo";

const Main = () => {
  return (
    <StyledMain>
      <Todo title="Get milk" is_completed={true} />
      <Todo title="Go to Brainstorm with team" is_completed={true} />
      <Todo title="Have meeting" />
      <Todo title="Meet Emma" />
      <Todo title="Go to market" />
    </StyledMain>
  );
};

export default Main;
