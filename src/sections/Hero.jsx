import ResumeButton from "../components/ResumeButton";

export default function Hero() {
  return (
    <div className="bgclass flex justify-center items-center h-screen pt-24">
      <div className="text-center">
        <p className="text-8xl mb-6 text-white suse-title">
          Hi, I&apos;m Aniket Jas
        </p>
        <p className="text-8xl text-white suse-title mb-6">
          Full-stack Web Developer
        </p>
        <div className="flex justify-center">
          <div className="w-48 px-8 py-4 text-center bg-gray-800 hover:bg-black text-white rounded-xl text-lg">
            <ResumeButton />
          </div>
        </div>
      </div>
    </div>
  );
}
