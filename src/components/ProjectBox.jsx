export default function ProjectBox({ pic, title, desc, github, website }) {
  return (
    <div className="border border-gray-500 shadow-lg rounded-xl">
      <div>
        <img src={"/projectsnap/" + pic} alt="" className="rounded-t-xl" />
      </div>
      <div className="p-4">
        <p className="text-2xl raleway-bold mb-4">{title}</p>
        <p className="text-lg text-gray-600 work-sans-regular mb-4">{desc}</p>
      </div>
      <div className="p-4 pt-0 mb-4">
        <a
          href={github}
          className="bg-blue-600 hover:bg-blue-900 text-white mr-4 px-4 py-2 rounded-lg"
        >
          <button>Github</button>
        </a>
        {website ? (
          <a
            href={website}
            className="bg-teal-700 hover:bg-teal-900 text-white mr-4 px-4 py-2 rounded-lg"
          >
            <button>Website</button>
          </a>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
