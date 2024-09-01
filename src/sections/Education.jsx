import schoolpic from "../images/schoollogo.png";
import collegepic from "../images/collegelogo.png";

export default function Education() {
  return (
    <div className="pt-24 px-16 mb-16">
      <p className="raleway-bold text-blue-900 text-4xl">Education</p>
      <div className="w-full h-1 rounded-sm bg-gray-500 my-6 mb-8"></div>
      <div>
        <div className="flex border border-black rounded-xl px-8 py-4">
          <div className="flex justify-center items-center w-1/6">
            <img src={collegepic} className="w-48" />
          </div>
          <div className="py-6 pl-8 w-5/6">
            <p className="text-4xl mb-4 raleway-bold">
              Indian Institute of Technology (Indian School of Mines), Dhanbad
            </p>
            <div className="flex justify-between w-100">
              <p className="text-xl work-sans-regular mb-4">
                Computer Science and Engineering
              </p>
              <p className="text-xl work-sans-regular mb-4">2023</p>
            </div>
            <p className="text-lg work-sans-regular">CGPA: 5.38</p>
          </div>
        </div>
        <div className="flex border border-black rounded-xl px-8 py-4 mt-4">
          <div className="flex justify-center items-center w-1/6">
            <img src={schoolpic} className="w-64" />
          </div>
          <div className="py-6 pl-8 w-5/6">
            <p className="text-4xl mb-4 raleway-bold">
              Krishna Public School, Bhilai
            </p>
            <div className="flex justify-between w-100">
              <p className="text-xl work-sans-regular mb-4">
                AISSC(12th) - Maths + Computer Science
              </p>
              <p className="text-xl work-sans-regular mb-4">2018</p>
            </div>
            <p className="text-lg work-sans-regular">Percentage: 76%</p>
          </div>
        </div>
        <div className="flex border border-black rounded-xl px-8 py-4 mt-4">
          <div className="flex justify-center items-center w-1/6">
            <img src={schoolpic} className="w-64" />
          </div>
          <div className="py-6 pl-8 w-5/6">
            <p className="text-4xl mb-4 raleway-bold">
              Krishna Public School, Bhilai
            </p>
            <div className="flex justify-between w-100">
              <p className="text-xl work-sans-regular mb-4">SSC(10th)</p>
              <p className="text-xl work-sans-regular mb-4">2016</p>
            </div>
            <p className="text-lg work-sans-regular">CGPA: 9.8</p>
          </div>
        </div>
      </div>
    </div>
  );
}
