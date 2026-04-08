import React, { useState } from "react";

type Props = {
  addTask: (text: string, priority: string, status: string) => void;
};

const TodoInput: React.FC<Props> = ({ addTask }) => {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("medium");
  const [status, setStatus] = useState("очікує");

  const handleAdd = () => {
    if (!text.trim()) return;
    addTask(text.trim(), priority, status);
    setText("");
  };

  return (
    <div className="input-group">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Введіть завдання..."
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">Високий</option>
        <option value="medium">Середній</option>
        <option value="low">Низький</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="очікує">Очікує</option>
        <option value="в процесі">В процесі</option>
        <option value="виконано">Виконано</option>
      </select>
      <button className="add-btn" onClick={handleAdd}>Додати</button>
    </div>
  );
};

export default TodoInput;
