import TechBox from "../components/TechBox";
import logo from "../techlogo.json";

export default function TeckStack() {
  return (
    <div className="pt-24 px-16 mb-16">
      <p className="raleway-bold text-blue-900 text-4xl">Tech Stack</p>
      <div className="w-full h-1 rounded-sm bg-gray-500 my-6 mb-8"></div>
      <div className="grid grid-cols-4 gap-6">
        {logo &&
          logo.values.map((e) => {
            console.log(e.key, e.val);
            return <TechBox logo={e.val} name={e.key} key="" />;
          })}
      </div>
    </div>
  );
}
