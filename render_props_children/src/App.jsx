import "./App.css";

import Header from "./components/Header";
import TasksList from "./components/TasksList"

function App() {
  return (
    <article className="w-2/3 mx-auto shadow-lg rounded-lg md:text-xl">
      <Header />

      <TasksList />
    </article>
  );
}

export default App;
