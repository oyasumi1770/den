import React, { useState } from "react";

type Task = {
  id: string;
  text: string;
  priority: string;
  status: string;
};

type Props = {
  task: Task;
  deleteTask: (id: string) => void;
  changeStatus: (id: string, status: string) => void;
  editTask: (id: string, text: string) => void;
};

const TodoItem: React.FC<Props> = ({
  task,
  deleteTask,
  changeStatus,
  editTask,
}) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(task.text);

  return (
    <div
      className={`task ${task.priority} ${
        task.status === "виконано" ? "done" : ""
      }`}
    >
      {editing ? (
        <input
          className="task-content"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
        />
      ) : (
        <div className="task-content">
          {task.text} <span style={{ opacity: 0.7 }}>({task.priority})</span>
        </div>
      )}

      <select
        value={task.status}
        onChange={(e) => changeStatus(task.id, e.target.value)}
      >
        <option value="очікує">Очікує</option>
        <option value="в процесі">В процесі</option>
        <option value="виконано">Виконано</option>
      </select>

      <div className="task-actions">
        {editing ? (
          <button
            className="edit-btn"
            onClick={() => {
              editTask(task.id, value);
              setEditing(false);
            }}
          >
            Зберегти
          </button>
        ) : (
          <button className="edit-btn" onClick={() => setEditing(true)}>
            Редагувати
          </button>
        )}
        <button className="delete-btn" onClick={() => deleteTask(task.id)}>
          Видалити
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
