import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import TodoList from "./components/todolist/TodoList";
import "./styles/global.css";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
