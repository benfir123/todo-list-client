import { StyledMain } from "./styles/Main.styled";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Todo from "./Todo";

const Main = ({
  todos,
  handleTodoDelete,
  handleTodoComplete,
  handleTodoSort,
}) => {
  return (
    <DragDropContext
      onDragEnd={(param) => {
        if (!param.destination) return;
        const srcI = param.source.index;
        const desI = param.destination.index;
        todos.splice(desI, 0, todos.splice(srcI, 1)[0]);
        handleTodoSort(srcI, desI);
      }}
    >
      <StyledMain>
        <Droppable droppableId="droppable-1">
          {(provided, _) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {todos.map((todo, i) => (
                <Draggable
                  key={todo.id}
                  draggableId={"draggable-" + todo.id}
                  index={i}
                >
                  {(provided, snapshot) => (
                    <Todo
                      title={todo.title}
                      is_completed={todo.is_completed}
                      innerRef={provided.innerRef}
                      provided={provided}
                      handleTodoDelete={handleTodoDelete}
                      handleTodoComplete={handleTodoComplete}
                      listId={todo.id}
                      isDragging={snapshot.isDragging}
                    />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </StyledMain>
    </DragDropContext>
  );
};

export default Main;
