// // import { useRef, useState } from "react";
// import { v4 as uuidv4 } from "uuid";

// // function App(props) {
// //   const [todoForm, setTodoForm] = useState({});
// //   const [currentDate, setCurrentDate] = useState(getDate());
// //   const [id, setId] = useState(uuidv4());
// //   const [textInput, setTextInput] = useState("");
// //   const [error, setError] = useState("");
// //   const [todoArr, setTodoArr] = useState([]);

// //   function getDate() {
// //     const today = new Date();
// //     const minutes = today.getMinutes();
// //     const hour = today.getHours();
// //     const month = today.getMonth() + 1;
// //     const year = today.getFullYear();
// //     const date = today.getDate();
// //     return `${month}/${date}/${year} - ${hour}:${minutes}`;
// //   }

// //   const formHandler = (e) => {
// //     e.preventDefault();

// //     if (textInput.length === 0) {
// //       return setError("Type something");
// //     }

// //     setTodoArr((prevArray) => [
// //       ...prevArray,
// //       setTodoForm({
// //         text: textInput,
// //         date: currentDate,
// //         id: id,
// //       }),
// //     ]);

// //     setId(uuidv4());
// //     setTextInput("");
// //     console.log(todoArr);
// //   };

// //   return (
// //     <div>
// //       <form action="" onSubmit={formHandler}>
// //         <input
// //           type="text"
// //           value={textInput}
// //           onChange={(e) => setTextInput(e.target.value)}
// //         />
// //         {error && <p>{error}</p>}

// //         <button type="submit">Add</button>
// //       </form>

// //       <div>
// //         {/* {todoArr && (
// //           <div>
// //             {todoArr.map((todo) => (
// //               <div>{todo.text}</div>
// //             ))}
// //           </div>
// //         )} */}
// //       </div>
// //     </div>
// //   );
// // }

// // export default App;

// import React, { useState } from "react";

// function App() {
//   const [myArray, setMyArray] = useState([]);
//   const [todoForm, setTodoForm] = useState({});
//   const [currentDate, setCurrentDate] = useState(getDate());
//   const [id, setId] = useState(uuidv4());
//   const [textInput, setTextInput] = useState("");
//   const [error, setError] = useState("");
//   const [todoArr, setTodoArr] = useState([]);

//   function getDate() {
//     const today = new Date();
//     const minutes = today.getMinutes();
//     const hour = today.getHours();
//     const month = today.getMonth() + 1;
//     const year = today.getFullYear();
//     const date = today.getDate();
//     return `${month}/${date}/${year} - ${hour}:${minutes}`;
//   }

//   const addObjectToArray = () => {
//     setTextInput(textInput);
//     const newObj = { text: textInput }; // Replace with your object
//     setMyArray((prevArray) => [...prevArray, newObj]);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={textInput}
//         onChange={(e) => setTextInput(e.target.value)}
//       />
//       <button onClick={addObjectToArray}>Add Object</button>
//       <ul>
//         {myArray.map((item, index) => (
//           <li key={index}>{item.key}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  const [todos, setTodos] = useState([
    {
      currentDate: getFullDate(),
      description:
        "The 2024 UEFA European Football Championship, commonly referred to as UEFA Euro 2024 (stylised as UEFA EURO 2024) or simply Euro 2024, will be the 17th edition of the UEFA European Championship, the quadrennial international football championship organised by UEFA for the men's national teams of its member associations. Germany will host the tournament, which is scheduled to take place from 14 June to 14 July 2024 with the winner later competing in the 2025 CONMEBOL–UEFA Cup of Champions against the 2024 Copa América winner",
      dueDate: "2024-06-14",
      fullDate: "2023-8-20 12:21",
      id: 12,
      task: "UEFA Euro 2024",
    },
  ]);
  const [task, setTask] = useState("");
  const [currentDate, setCurrentDate] = useState(getDate().toLocaleString());
  const [dueDate, setDueDate] = useState(deadlineDate());
  const [fullDate, setFullDate] = useState(getFullDate());
  const [description, setDescription] = useState("");
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  function getFullDate() {
    const today = new Date();
    const minutes = today.getMinutes();
    const hour = today.getHours();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date} ${hour}:${minutes}`;
  }

  function getDate() {
    const today = new Date();
    const minutes = today.getMinutes();
    const hour = today.getHours();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date} ${hour}:${minutes}`;
  }

  function deadlineDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${year}-${month}-${date}`;
  }

  const addTodo = () => {
    if (task.trim() === "") {
      alert("Please enter a task and date.");
      return;
    }

    const newTodo = {
      id: Date.now(),
      task,
      description,
      dueDate,
      currentDate,
      fullDate,
    };

    setTodos([...todos, newTodo]);
    setTask("");
    setDueDate(getDate());
    setCurrentDate(deadlineDate());
    setFullDate(getFullDate);
    setDescription("");
    setModal(false);
  };

  const removeTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // useEffect(
  //   function () {
  //     const controller = new AbortController();

  //     async function fetchMovies() {
  //       try {
  //         setIsLoading(true);
  //         setError("");

  //         const res = await fetch(
  //           `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
  //           { signal: controller.signal }
  //         );

  //         if (!res.ok)
  //           throw new Error("Something went wrong with fetching movies");

  //         const data = await res.json();
  //         if (data.Response === "False") throw new Error("Movie not found");

  //         setMovies(data.Search);
  //         setError("");
  //       } catch (err) {
  //         if (err.name !== "AbortError") {
  //           console.log(err.message);
  //           setError(err.message);
  //         }
  //       } finally {
  //         setIsLoading(false);
  //       }
  //     }

  //     if (query.length < 3) {
  //       setMovies([]);
  //       setError("");
  //       return;
  //     }

  //     handleCloseMovie();
  //     fetchMovies();

  //     return function () {
  //       controller.abort();
  //     };
  //   },
  //   [query]
  // );

  return (
    <div
      className="font-sans
    bg-slate-950 text-sky-500  flex flex-col h-full min-h-screen flex-1 justify-start items-center px-5 py-4 gap-10 relative md:px-20 md:pt-14 lg:px-44 lg:pt-20"
    >
      <h1 class="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-violet-700 text-shadow-[0px_0px_500px_var(--tw-shadow-color)] shadow-violet-400/100 md:text-8xl">
        useTodo
      </h1>
      <Todo
        task={task}
        setTask={setTask}
        onClick={addTodo}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        dueDate={dueDate}
        setDueDate={setDueDate}
        description={description}
        setDescription={setDescription}
        modal={modal}
        setModal={setModal}
        fullDate={fullDate}
      />

      <TodoList todos={todos} removeTodo={removeTodo} />

      <Footer />
    </div>
  );
}

export default App;
