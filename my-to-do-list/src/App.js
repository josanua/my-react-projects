import { useState } from 'react';
import AddTaskForm from "./components/AddTaskForm";
import TasksList from "./components/TasksList";
import { listData } from "./Data";
// import './App.css';

function App() {
    const [data, setListData] = useState(listData);
    const [index, setIndex] = useState(0);


    function handleAddTask(formData) {
        const queryText = formData.get("taskName");
        console.log(queryText);

        let generateId = listData.length +  1 ;
        setListData(listData.push({id: generateId, taskName: queryText, status: 'in-progress'}));

        console.log(listData);
    }

  return (
      <div className="App">
          <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
              <div className="px-4 py-2">
                  <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
              </div>
              <AddTaskForm onSend={handleAddTask}/>
              <TasksList listData={listData}/>
              <button
                  className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit">
                  Mark as Done
              </button>
              <button
                  className="flex-shrink-0 bg-red-500 hover:bg-red-700 border-red-500 hover:border-red-700 text-sm border-4 text-white py-1 px-2 rounded"
                  type="submit">
                  Delete task
              </button>
          </div>
      </div>
  );
}

export default App;
