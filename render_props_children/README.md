
# Task Manager

A simple Task Manager application built with React using the Render Props pattern. This 
application allows users to add, edit, delete, and toggle task completion while persisting tasks 
in localStorage.

## Features 
* Add new tasks
* Edit existing tasks
* Remove tasks
* Toggle task completion
* Persist tasks in localStorage
* Filter task by completion

## Technologies Used 
* React (Functional components and Hooks)
* Render Props pattern
* localStorage API
* Tailwind CSS (fo styling)

## Project Structure
```
📦 Task Manager
├── 📂 src
│   ├── 📂 components
│   │   ├── Header.jsx 
│   │   ├── TaskList.jsx # Renders a list of tasks (UI component)
│   │   ├── TasksProvider.jsx # Task component using Render Props (Logic component)
│   ├── App.js  # Main application component
│   ├── main.js  
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md  # Project documentation
├── USER_STORY.md
├── vite.config.js
```

## Usage 
1. Type a task in the input field and click Add task.
2. Click on checkbox to toggle completion.
3. Click the Edit (Edit sign) button to modify a task.
4. Click the Delete (Bin sign) button to remove a task.
5. Tasks will persist in localStorage, so your list remains even after refreshing the page.
6. Click on of the filtering buttons to see filtered tasks

## Contribution
Contributions are welcome! 

## License
This project is licensed under the MIT License 

## Acknowledgments 👏

- [Scrimba](https://scrimba.com/)
- [React](https://react.dev/)
