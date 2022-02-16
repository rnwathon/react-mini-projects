import * as React from 'react';
import data from './data';
import List from './Components/List';

function PersonList() {
  const [persons, setPersons] = React.useState(data);
  return (
    <section className="bg-slate-100 h-screen flex items-center justify-center">
      <section className="bg-white shadow-lg rounded-lg w-96 py-5 px-3">
        <h1 className="text-lg text-center text-red-400 font-bold"> Person List </h1>
        <List list={persons} />
        <button
          type="button"
          className="bg-red-400 w-full p-3 rounded-lg text-white"
          onClick={() => setPersons([])}
        >
          Clear List
        </button>
      </section>
    </section>
  );
}

export default PersonList;
