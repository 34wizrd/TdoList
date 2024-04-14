import Filters from "@/components/Filters";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div
      className="
        w-1/2
        m-auto
        flex
        flex-col
        bg-white
        p-5
        rounded-md
        h-3/4

      "
    >
      <p className="text-black">TODO APP with REDUX</p>
      <Filters />
      <TodoList />
    </div>
  );
}
