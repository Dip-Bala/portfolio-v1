type BlogProps = {
    blog: Blog
}
export default function Blog({ blog }: BlogProps) {
  return (
    <a
      href={blog.href}
      target="_blank"
      className="group flex flex-col gap-1 border border-lime/20 rounded-xl 
      p-4 hover:border-pink-400/60 transition bg-white/5"
    >
      <span className="text-offwhite font-medium group-hover:text-pink-400 transition">
        {blog.title}
      </span>

      <div className="flex gap-4 text-sm text-offwhite/50">
        <span>{blog.platform}</span>
        <span>•</span>
        <span>{blog.year}</span>
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

