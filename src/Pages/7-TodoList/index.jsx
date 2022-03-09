import * as React from 'react';
import InputField from './Components/InputField';
import List from './Components/List';

function TodoListApp() {
  const [todos, setTodos] = React.useState([
    { value: 'Grocery date', checked: false },
    { value: 'Pay bills', checked: false },
    { value: 'Go to courses', checked: false },
    { value: 'Summer camp', checked: false },
    { value: 'Do your bed', checked: false },
  ]);

  const handleAddTodo = (data) => {
    setTodos((prevTodos) => [...prevTodos, { value: data, checked: false }]);
  };

  const handleCheck = (idx) => {
    const newTodos = [...todos];
    newTodos[idx].checked = !newTodos[idx].checked;
    setTodos(newTodos);
  };

  return (
    <div className="bg-slate-100 h-screen">
      <header className="bg-green-300 h-80 flex items-center justify-center">
        <h1 className="text-green-800 font-bold text-5xl tracking-wide">ToDo List</h1>
      </header>
      <section className="max-w-xl mx-auto px-5">
        <InputField onSubmit={handleAddTodo} />
        <List todos={todos} onCheck={handleCheck} />
      </section>
    </div>
  );
}

export default TodoListApp;
