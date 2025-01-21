import {useState} from 'react';
import AddTaskForm from "./components/AddTaskForm";
import TasksList from "./components/TasksList";
import { v4 as uuidv4 } from 'uuid';
import {data} from "./Data";

function App() {
    const [listData, setListData] = useState(data);
    const [checkedValues, setCheckedValues] = useState([]);

    // Utility function to generate a new task object
    const generateNewTask = (taskName) => ({
        id: listData.length + 1, // Use current `data` length for ID generation, todo: uuidv4();
        taskName,
        status: 'in-progress',
    });

    // Handle adding a new task
    const handleAddNewTask = (taskFormData) => {
        const taskName = taskFormData.get("taskName"); // Explicitly named for clarity
        const newTask = generateNewTask(taskName); // Generate task object

        setListData((prevData) => [...prevData, newTask]); // Update the state immutably
    };


    function handleSubmit(e) {
        e.preventDefault();

        // Determine which button was clicked
        const clickedButton = e.nativeEvent.submitter;
        const buttonName = clickedButton.name;

        // Get all checked inputs within the form
        const form = e.target; // The form element
        const inputs = Array.from(form.elements); // Convert NodeList to array

        // Filter checked inputs
        const checked = inputs
            .filter((input) => (input.type === "checkbox") && input.checked)
            .map((input) => +input.id); // Map their values

        if (buttonName === 'markAsDone') {
            // data iteration
            const updatedListData = listData.map((dataItem) => ({
                ...dataItem,
                isCompleted: checked.some((item) => item === dataItem.id),
            }));

            // update state hook
            setListData(updatedListData);
        }

        if (buttonName === 'deleteTask') {
            // Filter out tasks that were checked (those selected for deletion)
            const updatedListData = listData.filter((dataItem) => !checked.includes(dataItem.id));

            // update the state with the new list
            setListData(updatedListData);

        }
    }

    return (
        <div className="App">
            <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
                <div className="px-4 py-2">
                    <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
                </div>
                <AddTaskForm onSend={handleAddNewTask}/>

                <form onSubmit={(e) => handleSubmit(e)} className="px-4 py-2">
                    <TasksList listData={listData}/>
                    <button
                        className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                        name="markAsDone"
                        // onClick={handleMarkAsDone}
                    >
                        Mark as Done
                    </button>
                    <button
                        className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="submit"
                        name="deleteTask"
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
