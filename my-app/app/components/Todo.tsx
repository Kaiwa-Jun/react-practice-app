import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

interface TodoProps {
  title: string;
  completed: boolean;
}

export const Todo = ({ title, completed }: TodoProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow mb-2">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
          readOnly
        />
        <span
          className={`ml-3 ${
            completed ? "line-through text-gray-500" : "text-gray-900"
          }`}
        >
          {title}
        </span>
      </div>
      <div className="flex space-x-2">
        <button className="p-1 hover:bg-gray-100 rounded">
          <PencilIcon className="h-5 w-5 text-gray-500" />
        </button>
        <button className="p-1 hover:bg-gray-100 rounded">
          <TrashIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};
