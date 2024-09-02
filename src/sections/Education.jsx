import info from "../educationlogos.json";
import EducationBox from "../components/EducationBox";

export default function Education() {
  return (
    <div className="pt-24 px-16 mb-16">
      <p className="raleway-bold text-blue-900 text-4xl">Education</p>
      <div className="w-full h-1 rounded-sm bg-gray-500 my-6 mb-8"></div>
      <div>
        {info &&
          info.values.map((e) => {
            return (
              <EducationBox
                logo={e.logo}
                name={e.name}
                year={e.year}
                branch={e.branch}
                grade={e.grade}
                key={e.id}
              />
            );
          })}
      </div>
    </div>
  );
}
