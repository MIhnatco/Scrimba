import TasksProvider from "./TasksProvider";

/**
 * A functional component that renders the task list and provides the UI for managing tasks
 *
 * UI component consuming the TaskProvider
 * @component
 * @returns {JSX.Element} - The TasksList component
 */

function TasksList() {
  return (
    <TasksProvider>
      {(task, handleTask, tasks, addTask) => {
        
        return (<main className="md:flex justify-around">
          <aside className="md:w-1/4 flex flex-col items-center border-r-4 p-4"></aside>

          <article className="flex-grow-2 md:w-3/4 p-x">
            <form
              className="flex justify-center"
              aria-label="Task form"
              onSubmit={addTask}
            >
              <input
                type="text"
                value={task}
                onChange={handleTask}
                className="border w-2/4"
              />

              <button className="ml-4 py-1 px-4 border rounded-md bg-slate-700 text-white transition duration-[1s] hover:bg-slate-600 hover:text-white">
                Add task
              </button>
            </form>
          </article>
        </main>);
      }}
    </TasksProvider>
  );
}

export default TasksList;
