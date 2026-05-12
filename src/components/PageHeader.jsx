export default function PageHeader({ title, current, onAdd }) {
  return (
    <div className="flex items-center justify-between p-4">
      
      {/* LEFT */}
      <div className="flex flex-col">
        <span className="text-2xl font-semibold">
          {title}
        </span>

        <div className="text-gray-500">
          <span>Dashboard</span>
          <span className="mx-2">/</span>
          <span>{current}</span>
        </div>
      </div>

      {/* RIGHT */}
      <div>
        <button
          onClick={onAdd}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
        >
          Add {title}
        </button>
      </div>

    </div>
  );
}