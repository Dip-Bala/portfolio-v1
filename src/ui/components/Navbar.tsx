import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  const navItems = [
    {
      label: "about",
      icon: "/assets/smile.png",
      to: "/about",
      color: "text-pink",
      class: "-rotate-5"
    },
    {
      label: "skills",
      icon: "/assets/skills.png",
      to: "/skills",
      color: "text-lightturquoise",
      class: "rotate-10"
    },
    {
      label: "projects",
      icon: "/assets/start-up.png",
      to: "/projects",
      color: "text-lime",
      class: "-rotate-5"
    },
    {
      label: "contact",
      icon: "/assets/send.png",
      to: "/contact",
      color: "text-orange",
      class: "rotate-5"
    },
  ];

  return (
    <nav className="w-full px-6 md:px-40 py-4 flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-4xl font-roboto font-medium uppercase cursor-pointer text-lime" onClick={() => navigate('/')}>
        dipanwita
      </h1>
    <div className="h-0.5 w-full  border-t border-translime absolute top-22 right-0"></div>
      <div className="flex gap-6 md:gap-10 mt-4 md:mt-0 flex-wrap justify-center relative top-10">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`flex flex-col items-center gap-2 cursor-pointer transform transition hover:scale-110 hover:${item.color} ${item.class}`}
            onClick={() => navigate(item.to)}
          >
            <img src={item.icon} alt={item.label} className="w-15 h-15 object-contain" />
            <p className="text-md font-semibold ">{item.label}</p>
          </div>
        ))}
      </div>
    </nav>
  );
}


