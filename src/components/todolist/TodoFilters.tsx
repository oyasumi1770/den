import React from "react";

type Props = {
  filter: string;
  setFilter: (filter: string) => void;
};

const TodoFilters: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <div className="filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => setFilter("all")}
      >
        Всі
      </button>
      <button
        className={filter === "очікує" ? "active" : ""}
        onClick={() => setFilter("очікує")}
      >
        Очікує
      </button>
      <button
        className={filter === "в процесі" ? "active" : ""}
        onClick={() => setFilter("в процесі")}
      >
        В процесі
      </button>
      <button
        className={filter === "виконано" ? "active" : ""}
        onClick={() => setFilter("виконано")}
      >
        Виконано
      </button>
    </div>
  );
};

export default TodoFilters;
