import * as React from 'react';

function List(props) {
  const { list } = props;
  if (list && !list.length) return <p className="text-center p-5"> No Data </p>;

  return (
    <ul className="p-5 divide-y">
      {list.map((data, idx) => (
        <li
          key={`person-${idx}`}
          data-testid="list-item"
          className="flex items-center p-3"
        >
          <img
            className="w-14 h-14 mr-2 rounded-full object-cover"
            src={data.image}
            alt="avatar"
          />
          <div>
            <p className="font-bold"> {data.name} </p>
            <p className="text-slate-500"> Age: {data.age} </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default List;
