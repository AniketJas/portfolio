import Social from "../components/Social";

export default function ContactMe() {
  return (
    <div className="pt-24 px-16 pb-16 bg-black text-white">
      <p className="raleway-bold text-4xl">Contact Me</p>
      <div className="w-full h-1 rounded-sm bg-white my-6 mb-8"></div>

      <div className="flex gap-2">
        <div className="w-1/2">
          <p className="work-sans-regular text-lg">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I&apos;d love to hear from
            you.
          </p>

          <form action="" className="mt-10 work-sans-regular pr-10">
            <label className="text-lg">Name:</label>
            <input
              type="text"
              className="w-full my-4 px-4 py-2 rounded-xl"
              placeholder="Your name"
            />

            <label className="text-lg">Email:</label>
            <input
              type="text"
              className="w-full my-4 px-4 py-2 rounded-xl"
              placeholder="Your email address"
            />

            <label className="text-lg">Message:</label>
            <textarea
              className="w-full my-4 px-4 py-2 rounded-xl"
              placeholder="Your message"
            />

            <div className="flex justify-between">
              <a
                href="mailto:aniketd232@gmail.com"
                target="_blank"
                className="underline hover:text-gray-300"
              >
                Send me email directly
              </a>
              <button className="px-4 py-2 work-sans-regular bg-white text-black rounded-xl hover:bg-gray-500 hover:text-white">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="w-1/2 text-right">
          <div className="text-xl mb-4 mt-24 work-sans-regular">Email:</div>
          <div className="text-3xl suse-title ">ANIKETD232@GMAIL.COM</div>
          <div className="text-xl mb-4 mt-16 work-sans-regular">Location:</div>
          <div className="text-3xl suse-title ">DURG, CHHATTISGARH</div>
          <div className="text-xl mb-4 mt-16 work-sans-regular">Social:</div>
          <div className="flex justify-end">
            <Social />
          </div>
        </div>
      </div>
    </div>
  );
}
