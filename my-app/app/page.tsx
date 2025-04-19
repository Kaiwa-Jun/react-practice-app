"use client";

import { Todo } from "./components/Todo";
import { PlusIcon } from "@heroicons/react/24/outline";

// ダミーデータ
const dummyTodos = [
  { id: 1, title: "プロジェクトの設計を完了する", completed: false },
  { id: 2, title: "UIコンポーネントを作成する", completed: true },
  { id: 3, title: "テストを書く", completed: false },
  { id: 4, title: "ドキュメントを更新する", completed: false },
  { id: 5, title: "デプロイする", completed: false },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* ヘッダーセクション */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Todo App</h1>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-700">
            <PlusIcon className="h-5 w-5 mr-2" />
            新規Todo
          </button>
        </header>

        {/* フィルター/ソートセクション */}
        <div className="mb-6 flex space-x-4">
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
              すべて
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg">
              完了
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-lg">
              未完了
            </button>
          </div>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-lg ml-auto">
            並び替え
          </button>
        </div>

        {/* Todoリスト */}
        <div className="space-y-2">
          {dummyTodos.map((todo) => (
            <Todo key={todo.id} title={todo.title} completed={todo.completed} />
          ))}
        </div>

        {/* 完了/未完了の数の表示 */}
        <div className="mt-6 text-gray-600">
          <p>
            合計: {dummyTodos.length}個 (完了:{" "}
            {dummyTodos.filter((t) => t.completed).length}個, 未完了:{" "}
            {dummyTodos.filter((t) => !t.completed).length}個)
          </p>
        </div>
      </div>
    </div>
  );
}
