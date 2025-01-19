export default function AddTaskForm(props) {
    function handleAddTask() {
        // props.onSend();
        // e.preventDefault();
        console.log('Btn clicked');
    }

    return (
        <form action={props.onSend} className="w-full max-w-sm mx-auto px-4 py-2">
            <div className="flex items-center border-b-2 border-teal-500 py-2">
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    name="taskName"
                    type="text"
                    placeholder="Add a task"
                    required
                />
                <button
                    onClick={handleAddTask}
                    className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
                    type="submit">
                    Add
                </button>
            </div>
        </form>
    )
}