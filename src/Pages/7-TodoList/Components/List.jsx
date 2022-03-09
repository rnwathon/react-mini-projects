import * as React from 'react';

const List = ({ todos, onCheck }) => {
  const taskLeft = React.useMemo(
    () => todos.filter((todo) => todo.checked === false),
    [todos]
  );

  return (
    <section className="bg-white rounded-lg shadow-xl min-h-96">
      <ul className="p-5 divide-y">
        {todos.map((todo, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`todo-${idx}`} className="py-2">
            <label htmlFor={`todo-${idx}`}>
              <input
                id={`todo-${idx}`}
                type="checkbox"
                className="hidden peer"
                checked={todo.checked}
                onChange={() => onCheck(idx)}
              />
              <p className="peer-checked:line-through peer-checked:text-slate-400">
                {todo?.value}
              </p>
            </label>
          </li>
        ))}
      </ul>
      <section className="w-full p-5 rounded-b-lg">
        <p className="text-green-800 font-bold"> {taskLeft.length} Task(s) Left</p>
      </section>
    </section>
  );
};

export default List;
