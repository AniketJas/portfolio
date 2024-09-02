import ProjectBox from "../components/ProjectBox";
import projects from "../projects.json";

export default function Projects() {
  return (
    <div className="pt-24 px-16 mb-16">
      <p className="raleway-bold text-blue-900 text-4xl">Projects</p>
      <div className="w-full h-1 rounded-sm bg-gray-500 my-6"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects &&
          projects.projects.map((e) => {
            return (
              <ProjectBox
                key={e.id}
                pic={e.pic}
                title={e.title}
                desc={e.desc}
                github={e.github}
                website={e.website}
              />
            );
          })}
      </div>
    </div>
  );
}
