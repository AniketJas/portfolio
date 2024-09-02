export default function Social() {
  return (
    <div className="flex h-8 w-64">
      <div className="w-1/4">
        <a href="https://github.com/AniketJas" target="_blank">
          <img src="sociallogo/github.png" alt="" className="h-12" />
        </a>
      </div>
      <div className="w-1/4">
        <a href="https://www.linkedin.com/in/aniket-jas/" target="_blank">
          <img src="sociallogo/linkedin.png" alt="" className="h-12" />
        </a>
      </div>
      <div className="w-1/4">
        <a href="https://x.com/aniket_jas_" target="_blank" className="w-1/4">
          <img src="sociallogo/twitter.png" alt="" className="h-12" />
        </a>
      </div>
      <div className="w-1/4">
        <a
          href="https://leetcode.com/u/aniket_jas_/"
          target="_blank"
          className="w-1/4"
        >
          <img src="sociallogo/leetcode.png" alt="" className="h-12" />
        </a>
      </div>
    </div>
  );
}
