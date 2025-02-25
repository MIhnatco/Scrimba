# Task Manager

## Users (people with different background and needs)

## UI

    As a user, I want to see a current date so that I know which day of the week is
    Acceptance criteria:
        - Display the main title: "Task Manager"
        - Display the current date: 20.2.2025
        - UI element: header html5 element
        - React component: <Header />

    As a user, I want to see a list of tasks so that I know what needs to be done.

## Functionalities

### Add a task

    As a user, I want to add tasks to the list (local array) so that I can keep track of thigns I need to do.

    Acceptance criteria:
        - UI Element: input element and "Add task" button
        - React component: <TasksList />
        - State: tasks stored in an array
        - Interaction: User types in an input element and clicks "Add task" button to update the list

### Viewing tasks

    As a user, I want to see my list of tasks so that I can see what needs to be done.

    Acceptance criteria:
        - UI Element: <ul> with <li>
        - React component: <TasksList />
        - State: Renders a dynamic list based on stored tasks
