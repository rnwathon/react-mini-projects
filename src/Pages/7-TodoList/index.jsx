import * as React from 'react';

function TodoListApp() {
  const [todos, setTodos] = React.useState([
    'Grocery date',
    'Pay bills',
    'Go to courses',
    'Summer camp',
    'Do your bed',
  ]);
  const [todoInput, setTodoInput] = React.useState('');

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [...prevTodos, todoInput]);
    setTodoInput('');
  };

  return (
    <div className="bg-slate-100 h-screen">
      <header className="bg-green-300 h-80 flex items-center justify-center">
        <h1 className="text-green-800 font-bold text-5xl tracking-wide">ToDo List</h1>
      </header>
      <section className="max-w-xl mx-auto px-5">
        <section className="bg-white rounded-lg shadow-xl p-2 -mt-8 mb-5 h-14 flex items-stretch">
          <input
            type="text"
            placeholder="What to do?"
            className="grow pl-2 focus:outline-none"
            value={todoInput}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 px-8 h-full rounded-lg text-white"
            onClick={handleAddTodo}
          >
            Submit
          </button>
        </section>
        <section className="bg-white rounded-lg shadow-xl min-h-96">
          <ul className="p-5 divide-y">
            {todos.map((todo, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`todo-${idx}`} className="py-2">
                <label htmlFor={`todo-${idx}`}>
                  <input id={`todo-${idx}`} type="checkbox" className="hidden peer" />
                  <p className="peer-checked:line-through peer-checked:text-slate-400">
                    {todo}
                  </p>
                </label>
              </li>
            ))}
          </ul>
          <section className="w-full p-5 rounded-b-lg">
            <p className="text-green-800 font-bold"> 0 Task(s) Left</p>
          </section>
        </section>
      </section>
    </div>
  );
}

export default TodoListApp;
