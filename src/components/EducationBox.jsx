export default function EducationBox({ logo, name, year, branch, grade }) {
  return (
    <div className="flex border border-black rounded-xl px-8 py-4 mb-4 shadow-lg">
      <div className="flex justify-center items-center w-1/6">
        <img src={"portfolio/" + logo} className="w-48" />
      </div>
      <div className="py-6 pl-8 w-5/6">
        <p className="text-4xl mb-4 raleway-bold">{name}</p>
        <div className="flex justify-between w-100">
          <p className="text-xl work-sans-regular mb-4">{branch}</p>
          <p className="text-xl work-sans-regular mb-4">{year}</p>
        </div>
        {grade <= 10 ? (
          <p className="text-lg work-sans-regular">CGPA: {grade}</p>
        ) : (
          <p className="text-lg work-sans-regular">Percentage: {grade}%</p>
        )}
      </div>
    </div>
  );
}
