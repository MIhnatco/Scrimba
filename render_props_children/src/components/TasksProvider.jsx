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
  const [newTask, setNewTask] = React.useState("");

  const [editinId, setEditingId] = React.useState(null);

  /**
   * Handles changes to the task input field
   * @param {Event} event - The event object from the input field
   */

  function handleNewTask(event) {
    setNewTask(event.target.value);
  }

  /**
   * Adds a new task
   *
   * @param {Event} event - The event object from the form submission
   * @returns
   */
  function addTask(event) {
    event.preventDefault();

    if (!newTask.trim()) return;

    //check if the task is being edited
    if (editinId) {
      const editingTask = tasks.find((task) => task.id === editinId);

      const updatedTasks = tasks.map((t) =>
        t.id === editingTask.id ? { ...t, text: newTask } : t
      );

      setTasks(updatedTasks);
      setEditingId(null);
      setNewTask("");
      return;
    }

    const newTask = { text: newTask, id: new Date().toISOString(), done: false };

    //validate task before adding
    if (newTask.text && newTask.id) {
      setTasks((prevTasks) => [newTask, ...prevTasks]);
    }

    setNewTask(""); //Clearing the task input
  }

  /**
   * Save task to localStorage
   */
  React.useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    /**Clear localStorage when no tasks at hand*/
    if (!tasks.length) {
      localStorage.clear();
    }
  }, [tasks]);

  /**
   * Load tasks from localStorage on mount
   */
  React.useEffect(() => {
    let storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  /**
   * Removes a task from the list
   * @param {string} id - The ID of the task to remove
   */
  function removeTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  /**
   * Toggles completion status of a task
   * @param {string} id - The ID of the task to toggle
   */

  function toggleTaskCompletion(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }

  /**
   * Sets the task for editing
   *
   * @param {string} id - The ID of the task to edit
   */
  function handleEditing(id) {
    const findEditingTask = tasks.find((task) => task.id === id); //find the specific task

    setNewTask(findEditingTask.text); //set the task input to editing task's text

    setEditingId(id); //set the editing ID to the ID of the task being edited
  }

  return (
    <>
      {children(
        newTask,
        handleNewTask,
        tasks,
        addTask,
        removeTask,
        toggleTaskCompletion,
        editinId,
        handleEditing
      )}
    </>
  );
}

TasksProvider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TasksProvider;
