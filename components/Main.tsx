import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function Main() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "John Doe",
      url: "http://free-profile-pics.com/profile-pictures/01262014/download/terminator2-profile-picture-180x180.png",
      age: 36,
      note: "alergic to peanuts",
    },
    {
      name: "Jane Simmons",
      url: "https://avatarfiles.alphacoders.com/142/142168.jpg",
      age: 25,
    },
  ]);

  return (
    <div className="container mx-auto min-h-[80vh] my-5">
      <h1 className="text-center text-3xl font-bold mt-0 mb-6">
        People Invited to my Party
      </h1>
      <List people={people} />
      <Form people={people} setPeople={setPeople} />
    </div>
  );
}

export default Main;
