# Todo List

The front-end of a CRUD todo list application made with React.js

[API repository](https://github.com/benfir123/todolistapi)

![todoapp-screen](https://user-images.githubusercontent.com/48757880/196851886-69185545-9e75-44c9-acbc-06125e2f2e63.png)

## Features

- [x] Add new todo
- [x] Delete todo
- [x] Clear todo list
- [x] Mark todo as done
- [x] Show todo list
- [x] Reorder todo list

## Technologies used

- [React](https://pl.reactjs.org/) (Bootstrapped using [Create React App](https://create-react-app.dev/))
- [styled components](https://styled-components.com/)
- [React Beautiful Dnd](https://github.com/atlassian/react-beautiful-dnd)
- [Jest](https://jestjs.io/)

## How to use the app

### Step 1

Ensure that you also have the API server running. This app requires a functioning API back-end to work properly. See API repository :point_right: [link](https://github.com/benfir123/todolistapi).

### Step 2

Clone repository

```
git clone https://github.com/benfir123/todo-list-client.git
cd todo-list-client
```

### Step 3

Run app in development mode

```
npm i
npm start
```

### Step 4

Have fun with the different features! - add, delete, clear, mark done, and reorder your todos.

## More about the project

This todo list was developed following Test First principles. All the requirements were converted into test cases and code was then refactored to pass said cases. The main piece of business logic was being able to reorder your todos. We decided to use the library react-beautiful-dnd for this. Once the user has selected the new order of their todo list, the array is then rearranged using array splicing. The entire state of the UI is managed using local state from React.
