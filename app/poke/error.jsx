'use client'

export default function Error({ error, reset }) {
  return (
    <div className="p-8 border bg-red-50 text-red-700">
      <h2 className="text-xl font-bold">Error</h2>
      <p>Something went wrong fetching data.</p>
      <button onClick={() => reset()} className="mt-4 bg-red-600 text-white px-4 py-2">
        Retry
      </button>
    </div>
  );
}
