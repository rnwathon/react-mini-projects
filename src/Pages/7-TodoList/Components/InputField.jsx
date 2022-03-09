import * as React from 'react';

const InputField = ({ onSubmit }) => {
  const [todoInput, setTodoInput] = React.useState('');

  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoInput('');
    onSubmit(todoInput);
  };

  return (
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
        onClick={handleSubmit}
      >
        Submit
      </button>
    </section>
  );
};

export default InputField;
