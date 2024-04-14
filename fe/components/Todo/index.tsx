"use client";

import { Checkbox, Chip } from "@nextui-org/react";
import { useState } from "react";

// Define a type for the priority levels
type Priority = "High" | "Medium" | "Low";

// Define a type for the Todo component props
interface TodoProps {
  name: string;
  prioriry: Priority; // Note: There is a typo in 'prioriry', consider changing it to 'priority'
}

// Define the priority color mapping with specific types
const priorityColorMapping: Record<Priority, string> = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

const Todo: React.FC<TodoProps> = ({ name, prioriry }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        <p className="text-black">{name}</p>
      </Checkbox>
      <Chip style={{ margin: 0, color: priorityColorMapping[prioriry] }}>
        {prioriry}
      </Chip>
    </div>
  );
};

export default Todo;
