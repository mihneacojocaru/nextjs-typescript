import React, { useState } from "react";

import { IState as Props } from "./Main";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const Form: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    url: "",
    note: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.url) {
      return;
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);

    setInput({
      name: "",
      age: "",
      url: "",
      note: "",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center my-5 mx-auto w-3/4">
      <input
        className="sblock w-full px-3 py-1.5 my-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type="text"
        placeholder="name"
        name="name"
        value={input.name}
        onChange={handleChange}
      />
      <input
        className="sblock w-full px-3 py-1.5 my-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type="text"
        placeholder="age"
        name="age"
        value={input.age}
        onChange={handleChange}
      />
      <input
        className="sblock w-full px-3 py-1.5 my-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        type="text"
        placeholder="picture url"
        name="url"
        value={input.url}
        onChange={handleChange}
      />
      <textarea
        className="sblock w-full px-3 py-1.5 my-1 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="Note"
        cols={10}
        rows={10}
        name="note"
        value={input.note}
        onChange={handleChange}
      ></textarea>
      <button
        type="button"
        className="w-full px-6 py-2.5 my-4 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleClick}
      >
        Add to list
      </button>
    </div>
  );
};

export default Form;
