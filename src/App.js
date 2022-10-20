import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import GlobalStyles from "./components/styles/Global";
import { useEffect } from "react";

// Define color scheme of the app which is managed by styled components
const theme = {
  colors: {
    header: "#FFFFFF",
    main: "#FFFFFF",
    footer: "#F2F2F2",
    heading: "#6FC5A6",
    button: "#6FC5A6",
  },
};

function App() {
  // Initialize React local state variables
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [newTodoError, setNewTodoError] = useState("");

  // Fetch the current todo list from the back-end
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:8000/api/todos/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleTodoSubmit = (newTodo) => {
    const isValid = validate();
    if (isValid) {
      setNewTodoError("");
    } else {
      return;
    }
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newTodo }),
    };
    fetch("http://localhost:8000/api/todos/", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        const incrementedTodoList = todos.map((todo) => ({
          ...todo,
          position: (todo.position += 1),
        }));
        const updatedTodoList = [...incrementedTodoList, data];
        setTodos(sortTodos(updatedTodoList));
        setNewTodo("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTodoDelete = (id) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://localhost:8000/api/todos/${id}`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if (data === "Todo successfully deleted!") {
          const todo = todos.find((todo) => todo.id === id);
          let incrementedTodoList = [...todos];
          for (let i = todo.position + 1; i < todos.length; i++) {
            incrementedTodoList[i].position -= 1;
          }
          const updatedTodoList = incrementedTodoList.filter(
            (todo) => todo.id !== id
          );
          setTodos(updatedTodoList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTodoComplete = (id) => {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    };
    fetch(`http://localhost:8000/api/todos/${id}/complete/`, requestOptions)
      .then((response) => {
        if (response.status === 204) {
          const updatedTodoList = todos.map((todo) =>
            todo.id === id
              ? { ...todo, is_completed: todo.is_completed ? false : true }
              : todo
          );
          setTodos(updatedTodoList);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTodoClear = () => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:8000/api/todos/clear/", requestOptions)
      .then((response) => {
        if (response.status === 204) {
          setTodos([]);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleTodoSort = (source, destination) => {
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ source, destination }),
    };
    fetch("http://localhost:8000/api/todos/sort/", requestOptions)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const sortTodos = (arr) => {
    const sortedArr = arr.sort((a, b) => a.position - b.position);
    return sortedArr;
  };

  // Define function that validates the new todo form of the app
  const validate = () => {
    let newTodoError = "";

    if (!newTodo) {
      newTodoError = "todo cannot be blank";
    }
    if (newTodoError) {
      setNewTodoError(newTodoError);
      return false;
    }
    return true;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header todos={todos} handleTodoClear={handleTodoClear} />
        <Main
          todos={todos}
          handleTodoDelete={handleTodoDelete}
          handleTodoComplete={handleTodoComplete}
          handleTodoSort={handleTodoSort}
        />
        <Footer
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          newTodoError={newTodoError}
          handleTodoSubmit={handleTodoSubmit}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
