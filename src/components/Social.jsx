export default function Social() {
  return (
    <div className="flex h-8 w-64">
      <div className="w-1/4">
        <a href="https://github.com/AniketJas" target="_blank">
          <img src="sociallogo/github.webp" alt="" className="h-12" />
        </a>
      </div>
      <div className="w-1/4">
        <a href="https://www.linkedin.com/in/aniket-jas/" target="_blank">
          <img src="sociallogo/linkedin.webp" alt="" className="h-12" />
        </a>
      </div>
      <div className="w-1/4">
        <a href="https://x.com/aniket_jas_" target="_blank" className="w-1/4">
          <img src="sociallogo/twitter.webp" alt="" className="h-12" />
        </a>
      </div>
      <div className="w-1/4">
        <a
          href="https://leetcode.com/u/aniket_jas_/"
          target="_blank"
          className="w-1/4"
        >
          <img src="sociallogo/leetcode.webp" alt="" className="h-12" />
        </a>
      </div>
    </div>
  );
}
