"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { createTask } from "@/redux/features/taskSlice";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const AddTask = () => {
  const [input, setInput] = useState("");

  const dispatch: AppDispatch = useDispatch();

  const addTaskHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input) {
      toast.error("Please enter a task.");
      return;
    }
    dispatch(createTask(input));
    toast.success("Task added successfully.");
    setInput("");
  };

  return (
    <form onSubmit={addTaskHandler} className="mt-4 w-full flex justify-center items-center space-x-3">
      <Input autoFocus type="text" placeholder="Enter a Task..." value={input} onChange={(e) => setInput(e.target.value)} className="h-10 w-full flex-1" />
      <Button type="submit" size="lg">
        Add Task
      </Button>
    </form>
  );
};

export { AddTask };
