import { IoTrashBin } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";

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
      {(
        newTask,
        handleNewTask,
        tasks,
        addTask,
        removeTask,
        toggleTaskCompletion,
        editingId,
        handleEditing,
        cancelEditing,
        inputRef,
        filteredTasks,
        handleFilterChange,
        gotFilteredTasks
      ) => {
        const allTasksCount = tasks.length;
        const completedTasksCount = tasks.filter((task) => task.done).length;
        const pendingTasksCount = tasks.filter((task) => !task.done).length;

        return (
          <main className="md:flex justify-around">
            <aside className="md:w-1/4 flex flex-col items-center border-r-4 p-4">
              <button
                className={`border py-1 px-4 mx-auto m-3 md:w-2/3 rounded-md shodow-md text-center ${
                  filteredTasks === "all" ? "bg-slate-700 text-white" : ""
                } transition duration-[1s] hover:bg-slate-600 hover:text-white`}
                onClick={() => handleFilterChange("all")}
              >
                All tasks ({allTasksCount})
              </button>
              <button
                className={`border py-1 px-4 mx-auto m-3 md:w-2/3 rounded-md shodow-md text-center ${
                  filteredTasks === "completed" ? "bg-slate-700 text-white" : ""
                } transition duration-[1s] hover:bg-slate-600 hover:text-white`}
                onClick={() => handleFilterChange("completed")}
              >
                Completed tasks ({completedTasksCount})
              </button>
              <button
                className={`border py-1 px-4 mx-auto m-3 md:w-2/3 rounded-md shodow-md text-center ${
                  filteredTasks === "pending" ? "bg-slate-700 text-white" : ""
                } transition duration-[1s] hover:bg-slate-600 hover:text-white`}
                onClick={() => handleFilterChange("pending")}
              >
                Pending tasks ({pendingTasksCount})
              </button>
            </aside>

            <article className="flex-grow-2 md:w-3/4 p-x">
              <form
                className="flex justify-center"
                aria-label="Task form"
                onSubmit={addTask}
              >
                <input
                  type="text"
                  value={newTask}
                  onChange={handleNewTask}
                  className="border w-2/4"
                  ref={inputRef}
                />

                <button
                  className="ml-4 py-1 px-4 border rounded-md bg-slate-700 text-white hover:cursor-pointer transition duration-[1s] hover:bg-slate-600 hover:text-white"
                  aria-label={editingId ? "Save change" : "Add the task"}
                >
                  {editingId ? "Edit" : "Add task"}
                </button>

                {editingId ? (
                  <button
                    className="ml-4 py-1 px-4 border rounded-md bg-red-700 hover:bg-red-600 hover:cursor-pointer text-white transition durantion-[1s]"
                    type="button"
                    aria-label="Cancel editing"
                    onClick={cancelEditing}
                  >
                    Cancel
                  </button>
                ) : null}
              </form>

              <section className="max-w-2/3 mx-auto py-8">
                {gotFilteredTasks.length === 0 ? (
                  <p className="text-center py-8">
                    No tasks yet. Add one above!
                  </p>
                ) : (
                  <ul className="w-4/5 mx-auto" aria-label="Task list">
                    {gotFilteredTasks.map((task) => (
                      <li
                        key={task.id}
                        className={`w-4/5 mx-auto flex justify-between px-4 py-2 my-4 border rounded md:text-xl ${
                          task.done ? "bg-green-500" : ""
                        } ${task.done ? "text-white" : ""}`}
                        aria-label="Task"
                      >
                        <label
                          htmlFor={`task-${task.id}`}
                          className="flex justify-center items-center"
                        >
                          <input
                            type="checkbox"
                            id={`task-${task.id}`}
                            checked={task.done}
                            className="mr-3"
                            aria-checked={task.done}
                            aria-label="Task completion checkbox"
                            onChange={() => toggleTaskCompletion(task.id)}
                          />

                          <span
                            className={`${task.done ? "line-through" : ""}`}
                          >
                            {task.text}
                          </span>
                        </label>

                        <div className="flex gap-3">
                          <FaEdit
                            onClick={() => handleEditing(task.id)}
                            aria-label={`Edit task ${task.text}`}
                            className={`text-emerald-600 ${
                              task.done ? "text-white" : ""
                            } md:text-2xl hover:cursor-pointer transition duration-[1s] hover:text-emerald-800`}
                          />
                          <IoTrashBin
                            aria-label={`Remove task ${task.text}`}
                            className="text-red-600 hover:text-red-800 hover:cursor-pointer md:text-2xl transition duration-[1s]"
                            onClick={() => removeTask(task.id)}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            </article>
          </main>
        );
      }}
    </TasksProvider>
  );
}

export default TasksList;
