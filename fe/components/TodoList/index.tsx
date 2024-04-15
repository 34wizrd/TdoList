"use client";

import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import Todo from "../Todo";
import { useState } from "react";

// Define a type for the animal object
interface Priority {
  label: string;
  value: string;
}

const TodoList: React.FC = () => {
  const priority: Priority[] = [
    {
      label: "High",
      value: "High",
    },
    {
      label: "Medium",
      value: "Medium",
    },
    {
      label: "Low",
      value: "Low",
    },
  ];

  const [value, setValue] = useState<string>("");

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="h-3/4">
      <div className="h-3/4 overflow-y-hidden">
        <Todo name="Learn React" prioriry="High" />
        <Todo name="Learn Redux" prioriry="Medium" />
        <Todo name="Learn JavaScript" prioriry="Low" />
      </div>
      <div className="grid grid-flow-col gap-x-4">
        <Input className="flex" label="Enter todo" labelPlacement="outside" />
        <Select
          label="Assigned to"
          labelPlacement="outside"
          selectedKeys={[value]}
          onChange={handleSelectionChange}
          className=""
        >
          {priority.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
        <Button color="primary" className="">
          Add
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
