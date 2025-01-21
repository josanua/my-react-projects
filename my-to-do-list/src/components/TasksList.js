export default function TasksList({listData}) {

    // const inProgressVal = 'in-progress';
    const done = 'done';
    let idTaskText;

    return (
        <ul className="divide-y divide-gray-200 px-4">
            {
                listData.map(listItem => (
                    idTaskText = "todo-" + listItem.id,

                    <li className="py-4" key={listItem.id}>
                        <div className="flex items-center">
                            <input id={idTaskText}
                                   name={idTaskText}
                                   type="checkbox"
                                   defaultChecked={listItem.status === done}
                                   className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                            />
                            <label htmlFor={idTaskText} className="ml-3 block text-gray-900">
                                <span className={`text-lg font-medium ${ listItem.status === done && 'line-through' }`}>
                                    {listItem.taskName}
                                </span>
                            </label>
                        </div>
                    </li>
                ))
            }
        </ul>
    )
}