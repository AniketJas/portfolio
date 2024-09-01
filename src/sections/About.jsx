import photo from "../images/photo.jpg";

export default function About() {
  return (
    <div className=" pt-24 px-16">
      <p className="raleway-bold text-blue-900 text-4xl">About Me</p>
      <div className="w-full h-1 rounded-sm bg-gray-500 my-6"></div>
      <div className="flex">
        <div className="w-1/2 py-12 px-12">
          <p className="work-sans-regular text-2xl">
            Hii, I'm Aniket Jas, a self-taught frontend/full-stack web developer
            with experience in designing new features from ideation to
            production, implementation of wireframes and design flows into high
            performance software applications. I take into consideration the
            user experience while writing reusable and efficient code. I
            passionately combine good design, technology, and innovation in all
            my projects, which I like to accompany from the first idea to
            release.Currently, I'm focused on the backend development.
          </p>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={photo} className="rounded-3xl h-72" />
        </div>
      </div>
    </div>
  );
}
