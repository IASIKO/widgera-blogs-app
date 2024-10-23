export default function Loader() {
  return (
    <div className="flex flex-col h-[300px] sm:h-[500px] items-center justify-center p-[100px] my-auto">
      <div
        className="text-indigo-600 inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-indigo-600 border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
}
