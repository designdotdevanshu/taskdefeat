import { AddTask } from "@/components/add-task";
import { TaskList } from "@/components/task-list";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16">
      <main className="flex flex-col py-10 gap-8 row-start-2 items-center">
        <div className="flex items-end gap-4">
          <h1 className="text-5xl text-center">TaskDefeat</h1>
          <ThemeSwitcher />
        </div>
        <AddTask />
        <TaskList />
      </main>
    </div>
  );
}
