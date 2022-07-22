import React from "react";

import { IState as IProps } from "./Main";

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => (
      <li
        key={person.name}
        className="grid grid-cols-3 items-center justify-items-center p-3 m-1 border-2 border-blue-600"
      >
        <div className="place-self-start flex items-center">
          <img src={person.url} className="w-20 h-20 rounded-full" />
          <span className="mx-5">{person.name}</span>
        </div>
        <p>{person.age} years old</p>
        <p>{person.note}</p>
      </li>
    ));
  };

  return <ul className="mx-auto w-3/4">{renderList()}</ul>;
};

export default List;
