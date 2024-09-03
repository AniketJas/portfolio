export default function TechBox({ logo, name }) {
  return (
    <div className="flex justify-center shadow-lg border-2 border-gray-500 rounded-lg py-4 px-2">
      <div className="w-1/2 flex items-center justify-center">
        <img src={"portfolio/langpng/" + logo} className="h-16" />
      </div>
      <div className="w-1/2 flex justify-center items-center text-xl">
        <p>{name}</p>
      </div>
    </div>
  );
}
