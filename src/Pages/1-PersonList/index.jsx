import * as React from 'react';
import data from './data';
import List from './List';

function PersonList() {
  return (
    <section className="bg-slate-100 h-screen flex items-center justify-center">
      <section className="bg-white shadow-lg rounded-lg w-96 py-5 px-3">
        <h1 className="text-lg text-center text-red-400 font-bold"> Person List </h1>
        <List list={data} />
        <button type="button" className="bg-red-400 w-full p-3 rounded-lg text-white">
          Clear List
        </button>
      </section>
    </section>
  );
}

export default PersonList;
