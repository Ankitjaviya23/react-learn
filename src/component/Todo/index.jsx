import React, { useState } from "react";

const index = () => {
  const [todolist, updateList] = useState([]);
  const [taskName, updateTask] = useState("");
  const [btn, setBtn] = useState("Add Task");
  const [editIndex, setEditIndex] = useState(null);

  // common fn for add/update.
  const addUpdateTask = () => {
    if (!taskName.trim()) return alert("Enter task name");

    if (editIndex == null) {
      const newTask = {
        id: Date.now(),
        name: taskName.trim(),
        createdAt: new Date().toLocaleString(),
      };

      updateList([...todolist, newTask]);
    } else {
      const tempList = [...todolist];
      tempList[editIndex] = {
        ...tempList[editIndex],
        name: taskName.trim(),
      };

      updateList(tempList);
      setEditIndex(null);
    }
    setBtn("Add Task");
    updateTask("");
  };

  // for edit task.
  const editTask = (index) => {
    setBtn("Update Task");
    setEditIndex(index);
    updateTask(todolist[index].name);
  };

  // for delete task.
  const deleteTask = (index) => {
    updateTask("");
    const updatedList = todolist.filter((_, i) => i !== index);
    updateList(updatedList);
  };

  // textbox change.
  const handleChange = (event) => {
    updateTask(event.target.value);
  };

  return (
    <>
      <div className="container p-5">
        <h2 className="font-bold"> Todo</h2>
        <input
          type="text"
          id="voice-search"
          className="border border-black-300 p-2 mb-2"
          placeholder="Add Task name..."
          value={taskName}
          autoComplete="off"
          onChange={handleChange}
        />

        <button
          onClick={() => addUpdateTask()}
          type="submit"
          className="inline-flex items-center py-2 px-1 ms-2 text-sm font-medium text-white bg-blue-700 rounded-sm border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600"
        >
          {btn}
        </button>

        <table>
          <thead>
            <tr>
              <th className="text-center">Task ID</th>
              <th className="text-center">Task Name</th>
              <th className="text-center">Created at</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {todolist &&
              todolist.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td className="text-center">{item.id}</td>
                    <td className="text-center">{item.name}</td>
                    <td className="text-center">{item.createdAt}</td>
                    <td>
                      <button
                        onClick={() => editTask(index)}
                        type="submit"
                        className="inline-flex items-center py-2 px-1 ms-2 text-sm font-medium text-white bg-blue-700 rounded-sm border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteTask(index)}
                        type="submit"
                        className="inline-flex items-center py-2 px-1 ms-2 text-sm font-medium text-white bg-red-700 rounded-sm border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            {todolist.length === 0 && (
              <>
                <tr key={1}>
                  <td
                    colSpan={4}
                    className="text-center text-red-600 font-extralight"
                  >
                    No Data Found
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default index;
