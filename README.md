# ToDo
React To-do App with LocalStorage
This project is a simple to-do application built using React. It allows users to manage their tasks by adding, editing, and deleting them. Tasks are saved in the browser's localStorage, which ensures they persist even after the page is reloaded.

Features
Add To-do: Users can create a new task.
Edit To-do: Users can update the text of an existing task.
Delete To-do: Users can remove a task from the list.
Persist Data: The app stores tasks using localStorage, so they remain available after the page is refreshed.
Getting Started
Follow the steps below to set up and run the project locally.

Prerequisites
Node.js and npm installed on your machine.
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/react-todo-app.git
cd react-todo-app
Install dependencies:

bash
Copy code
npm install
Running the App
To start the application locally, run:

bash
Copy code
npm start
This will launch the app in your default browser at http://localhost:3000.

Project Structure
src/App.js: The main component that manages the to-do list state and handles the core logic:

Adding tasks.
Editing tasks.
Deleting tasks.
Storing tasks in localStorage.
State Management: The app maintains the list of to-dos using React's useState hook. It retrieves the initial list from localStorage (if available) and updates the storage whenever the list changes.

Key Features and How They Work
Adding a To-do:

The user types in the input field and clicks the "Add" button or presses Enter. The task is then added to the list.
Editing a To-do:

Each task in the list has an "Edit" button. When clicked, the user can modify the text of that task. After editing, the changes are saved, and localStorage is updated.
Deleting a To-do:

Each task has a "Delete" button. Clicking this will remove the task from the list and update localStorage.
Persisting Data:

Tasks are saved in the browser’s localStorage to ensure persistence across page reloads. The list is automatically loaded from localStorage when the app initializes.
