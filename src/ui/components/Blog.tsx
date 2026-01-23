type BlogProps = {
  blog: Blog;
};
export default function Blog({ blog }: BlogProps) {
  const platformLogo =
    blog.platform === "Medium"
      ? "/assets/Medium-Icon-White.svg"
      : "/assets/dev-badge.svg";
  return (
    <a
      href={blog.href}
      target="_blank"
      className="group flex gap-4 items-center border border-lime/20 rounded-xl 
      p-4 hover:border-pink-400/60 transition bg-white/5"
    >
      <img
        src={platformLogo}
        alt={`${blog.platform} logo`}
        className="w-20 h-20 rounded-lg"
      />
      <div className="flex flex-col">
        <span className="text-offwhite font-medium group-hover:text-pink-400 transition">
          {blog.title}
        </span>

        <div className="flex gap-4 text-sm text-offwhite/50">
          <span>{blog.platform}</span>
          <span>•</span>
          <span>{blog.year}</span>
        </div>
      </div>
    </a>
  );
}

export type Blog = {
  id: number;
  title: string;
  href: string;
  platform: "dev.to" | "Medium" | "Hashnode" | string;
  year: number;
};
