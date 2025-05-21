import React, { useState } from "react";
import { useTodo } from "../hooks/TodoProvider";

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");
  const { deleteTask, editTask, toggleTask, tasks } = useTodo();

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTask(task.id, editText);
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  const handleCancel = () => {
    setEditText(task.text);
    setIsEditing(false);
  };

  return (
    <div className="w-full flex items-center justify-between p-4 bg-gray-50 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow duration-200">
      <div className="flex items-center flex-1">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="mr-3 h-5 w-5 text-blue-500 rounded focus:ring-blue-400"
        />

        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-1 p-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            autoFocus
          />
        ) : (
          <p
            className={`text-gray-700 flex-1 ${
              task.completed ? "line-through text-gray-400" : ""
            }`}
          >
            {task.text}
          </p>
        )}
      </div>

      <div className="flex space-x-2 ml-2">
        {isEditing ? (
          <>
            <button
              onClick={handleEdit}
              className="p-2 rounded-md text-green-600 hover:bg-green-100 transition-colors duration-200"
              disabled={!editText.trim()}
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="p-2 rounded-md text-gray-600 hover:bg-gray-100 transition-colors duration-200"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEdit}
              className="p-2 rounded-md text-blue-600 hover:bg-blue-100 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </button>
            <button
              onClick={() => deleteTask(task.id)}
              className="p-2 rounded-md text-red-600 hover:bg-red-100 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TaskItem;
