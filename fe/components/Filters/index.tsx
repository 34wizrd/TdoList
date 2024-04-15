"use client";

import React, { ChangeEvent } from "react";
import { Input } from "@nextui-org/input";
import {
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Spacer,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { filtersSlice } from "./filtersSlice";

interface Priority {
  value: string;
  label: string;
}

const Filters: React.FC = () => {
  const list: Priority[] = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];

  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState<string>("");
  const [filterStatus, setFilterStatus] = React.useState<string>("All");
  const [filterPriorities, setFilterPriorities] = React.useState<string[]>([]);

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
  };

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterStatus(e.target.value);
    dispatch(filtersSlice.actions.statusFilterChange(e.target.value));
  };

  const handlePriorityChange = (value: string[]) => {
    setFilterPriorities(value);
    dispatch(filtersSlice.actions.prioritiesFilterChange(value));
  };

  return (
    <div className="">
      <div className="py-1">
        
        <Input
          label="Search"
          labelPlacement="outside"
          type="Search"
          placeholder="Enter todo"
          size="sm"
          value={searchText}
          onChange={handleSearchTextChange}
          className="text-black"
        />
      </div>
      <Spacer x={4} />
      <div className="py-1">
        <RadioGroup
          label="Filter by status"
          orientation="horizontal"
          classNames={{
            label: "text-black",
          }}
          value={filterStatus}
          onChange={handleStatusChange}
        >
          <Radio value="All" classNames={{ label: "text-black" }}>
            All
          </Radio>
          <Radio value="Completed" classNames={{ label: "text-black" }}>
            Completed
          </Radio>
          <Radio value="Todo" classNames={{ label: "text-black" }}>
            To do
          </Radio>
        </RadioGroup>
      </div>
      <Spacer x={4} />
      <div className="py-1">
        <Select
          label="Search By Priority"
          labelPlacement="outside"
          placeholder="Select "
          className=""
          size="md"
          value={filterPriorities}
          onChange={(e) => handlePriorityChange([e.target.value])}
        >
          {list.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

export default Filters;
