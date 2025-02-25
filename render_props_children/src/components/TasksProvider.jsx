import React from "react";

import PropTypes from "prop-types";

/**
 * A functional component that manages tasks and provides methods for adding, editing, removing, toggling task completion and filter tasks.
 *
 * Logic container using Render Props pattern
 *
 * @param {Object} props
 * @param {ReactNode} children
 *
 * @returns The Task component
 */

function TasksProvider({ children }) {
  const [tasks, setTasks] = React.useState([]);
  console.log(tasks);
  const [task, setTask] = React.useState("");

  /**
   * Handles changes to the task input field
   * @param {Event} event - The event object from the input field
   */

  function handleTask(event) {
    setTask(event.target.value);
  }

  /**
   * Adds a new task
   *
   * @param {Event} event - The event object from the form submission
   * @returns
   */

  function addTask(event) {
    event.preventDefault();

    if (!task.trim()) return;

    const newTask = { text: task, id: new Date().toISOString(), done: false };

    //validate task before adding
    if (newTask.text && newTask.id) {
      setTasks((prevTasks) => [newTask, ...prevTasks]);
    }

    setTask(""); //Clearing the task input
  }

  return <>{children(task, handleTask, tasks, addTask)}</>;
}

TasksProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TasksProvider;
