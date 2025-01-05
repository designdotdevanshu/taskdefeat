"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { deleteTask, fetchTasks, Task, updateTask } from "@/redux/features/taskSlice";
import { toast } from "sonner";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Trash } from "lucide-react";

const TaskLoader = () => (
  <Card className="min-w-[200px] w-full flex flex-col justify-between">
    <CardHeader>
      <Skeleton className="h-4 w-3/4" />
    </CardHeader>
  </Card>
);

const TaskList = () => {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<Task>();
  const { tasks, loading } = useSelector((state: RootState) => state.tasks);
  const dispatch: AppDispatch = useDispatch();

  // Fetch initial tasks
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  // Handle task click
  const handleTaskClick = (task: Task) => {
    if (!task) return;
    setSelectedTask(task);
    setOpen(true);
  };

  // Show loader if loading
  if (tasks.length === 0) {
    return loading === undefined || loading ? (
      <div className="mt-12 w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {[...Array(40)].map((_, index) => (
          <TaskLoader key={index} />
        ))}
      </div>
    ) : (
      // Show alert if no tasks
      <Alert variant="destructive">
        <AlertCircle className="size-4" />
        <AlertTitle>No Tasks Found</AlertTitle>
        <AlertDescription>Please create a task to get started.</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="relative mt-12 w-full grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {tasks.map((task, index) => (
        <Card key={`user-${task.userId}-task-${task.id}`} onClick={() => handleTaskClick(task)} className="min-w-[200px] w-full flex flex-col justify-between cursor-pointer">
          <CardHeader>
            {index + 1}. {task.title}
          </CardHeader>
        </Card>
      ))}

      {/* Edit task dialog */}
      {selectedTask && (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit task</DialogTitle>
              <DialogDescription>Make changes to the task here. Click save when you&apos;re done.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="task" className="text-right">
                  Task
                </Label>
                <Input id="task" value={selectedTask.title} autoFocus={false} className="col-span-3" />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="destructive"
                onClick={() => {
                  dispatch(deleteTask(selectedTask.id));
                  toast.warning("Task deleted successfully.");
                  setOpen(false);
                }}>
                <Trash size={16} />
                Delete Task
              </Button>
              <Button
                type="submit"
                onClick={() => {
                  dispatch(updateTask(selectedTask.id));
                  toast.success("Task updated successfully.");
                  setOpen(false);
                }}>
                {selectedTask.completed ? "Completed" : "Mark as Completed"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export { TaskList };
