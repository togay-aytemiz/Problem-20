import { useEffect, useState } from "react";

// todos endpoint'inden tüm todo'ları getirin ve todo bileşeninde görüntüleyin
// API endpoint: https://jsonplaceholder.typicode.com/users/1/todos
export default function Todos() {
  //   {
  //     "userId": 1,
  //     "id": 1,
  //     "title": "delectus aut autem",
  //     "completed": false
  // }[]

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/users/1/todos"
        );
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTodos();
  }, []);

  return (
    <div className="flex justify-center flex-col items-center py-8">
      <h1 className="text-2xl font-bold pb-4">Yapılacaklar Listem</h1>
      <div className="space-y-5 mx-3">
        {todos.map((todo) => {
          return <Todo key={todo.id} data={todo} />;
        })}
      </div>
    </div>
  );
}

function Todo({ data }) {
  return (
    <div className="relative flex items-start">
      <div className="flex h-6 items-center">
        <input
          id="completed"
          name="completed"
          type="checkbox"
          defaultChecked={data.completed}
          className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
        />
      </div>
      <div className="ml-3 text-sm leading-6">
        <div className="font-medium text-gray-900">{data.title}</div>
      </div>
    </div>
  );
}
