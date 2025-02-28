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

### Viewing tasks

    As a user, I want to see my list of tasks so that I can see what needs to be done.

    Acceptance criteria:
        - UI Element: <ul> with <li>
        - React component: <TasksList />
        - State: Renders a dynamic list based on stored tasks

### Handling empty state

    As a user, I want to see a message when I have no tasks at hand so I know my list is empty.
        - UI Element: placeholder message when no tasks exist
        - React component: <TasksList />
        - State: empty array
        - Interaction: Conditionally render a message when tasks.length === 0

### Adding a task

    As a user, I want to add tasks to the list (local array) so that I can keep track of thigns I need to do.

    Acceptance criteria:
        - UI Element: <input type='text'  /> element and <button>Add task</button> element
        - React component: <TasksList />
        - State: tasks stored in an array
        - Interaction: User types in an input element and clicks "Add task" button to update the list. It also clears the newTask input field.


### Removing a task

    As a user, I want to remove task from the list so that I can keep my list up to date.

    Acceptance criteria:
        - UI Element: <button>Remove</button> element next to each task
        - React component: <TasksList />
        - State: task removed from the list
        - Interaction: User clicks "Remove" (bin icon) button to update the list

### Marking any tasks as completed

    As a user, I want to be able mark any task as completed so that I know what is left to be done.

    Acceptance criteria:
        - UI Element: <input type="radio" />element before each task
        - React component: <TasksList />
        - State: task's done: true
        - Interaction: User clicks radio element that changes task's background to green, marking as done

### Editing a task

    As a user, I want to be able edit any task so that I may change my initial target.

    Acceptance criteria:
        - UI Element: edit icon next to each task
        - React component: <TasksList />
        - State: task
        - Interaction: User clicks Edit icon that updates the task's input element. Next, user may click <button>Edit</button> to save the changes or <button>Cancel</button> to cancel the editing.

### Cancel editing a task

    As a user, I want to be able cancel editing any task so that I may continue with my initial target

    Acceptance criteria:
        - UI Element: <button>Cancel</button>
        - React component: <TasksList />
        - State: task
        - Interaction: User clicsk "Cancel" button that resets the text in the input element.
