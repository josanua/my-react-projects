import {useState} from 'react';
import AddTaskForm from "./components/AddTaskForm";
import TasksList from "./components/TasksList";
import {data} from "./Data";

// import './App.css';

function App() {
    const [listData, setListData] = useState(data);
    const [checkedValues, setCheckedValues] = useState([]);

    // Utility function to generate a new task object
    const generateNewTask = (taskName) => ({
        id: listData.length + 1, // Use current `data` length for ID generation
        taskName,
        status: 'in-progress',
    });

    // Handle adding a new task
    const handleAddNewTask = (taskFormData) => {
        const taskName = taskFormData.get("taskName"); // Explicitly named for clarity
        const newTask = generateNewTask(taskName); // Generate task object

        setListData((prevData) => [...prevData, newTask]); // Update the state immutably
        console.log([...listData, newTask]); // Log the updated list
    };

    // Placeholder handlers for other actions
    const handleMarkAsDone = () => {
        // Logic for marking task as done
        console.log("Mark as Done clicked!");
    };

    const handleDeleteTask = (e) => {
        e.preventDefault();
        // Logic for deleting a task
        console.log("Delete Task clicked!");
    };

    const handleTasksListData = (e,formData) => {
        e.preventDefault();
        console.log(formData);
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Get all checked inputs within the form
        const form = event.target; // The form element
        const inputs = Array.from(form.elements); // Convert NodeList to array

        console.log(inputs);

        const checked = inputs
            .filter((input) => (input.type === "checkbox" ) && input.checked) // Filter checked inputs
            .map((input) => input.name); // Map their values

        setCheckedValues(checked); // Update state
        console.log("Checked Values:", checked); // Display checked values
    }

    return (
        <div className="App">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
                <div className="px-4 py-2">
                    <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
                </div>
                <AddTaskForm onSend={handleAddNewTask}/>

                <form onSubmit={(event) => handleSubmit(event) } className="px-4 py-2">
                <TasksList listData={listData}/>
                <button
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit"
                    // name="markAsDone"
                    // onClick={handleMarkAsDone}
                >
                    Mark as Done
                </button>
                <button
                    className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit"
                    // name="deleteTask"
                    // onClick={handleDeleteTask}
                >
                    Delete task
                </button>
                </form>
            </div>
        </div>
    );
}

export default App;
