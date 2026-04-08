import React, { useState, useEffect } from "react";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
import TodoFilters from "./TodoFilters";

type Task = {
  id: string;
  text: string;
  priority: string;
  status: string;
};

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState("all");

  // Завантаження
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    console.log("Завантажено з localStorage:", saved);

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setTasks(parsed);
        console.log("Успішно завантажено завдань:", parsed.length);
      } catch (e) {
        console.error("Помилка парсингу localStorage", e);
      }
    }
  }, []);

  // Збереження
  useEffect(() => {
    console.log("Зберігаємо в localStorage:", tasks.length, "завдань");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text: string, priority: string, status: string) => {
    if (!text.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      text: text.trim(),
      priority,
      status,
    };

    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const changeStatus = (id: string, newStatus: string) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  const editTask = (id: string, newText: string) => {
    if (!newText.trim()) return;
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText.trim() } : task
    ));
  };

  const filteredTasks = tasks.filter(task =>
    filter === "all" ? true : task.status === filter
  );

  return (
    <div className="todo-container">
      <TodoInput addTask={addTask} />
      <TodoFilters filter={filter} setFilter={setFilter} />

      {filteredTasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#888", padding: "30px 0" }}>
          Список завдань порожній
        </p>
      ) : (
        filteredTasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            changeStatus={changeStatus}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;