import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const [isItem, setIsItem] = useState('');
  const navItems = [
    {
      label: "about",
      icon: "/assets/smile.svg",
      focusIcon: "/assets/smile-focus.svg",
      to: "/about",
      color: "text-pink",
      class: "-rotate-10"
    },
    {
      label: "projects",
      icon: "/assets/laptop.svg",
      focusIcon: "/assets/smile-focus.svg",
      to: "/projects",
      color: "text-lime",
      class: "rotate-5"
    },
    {
      label: "contact",
      icon: "/assets/plane.svg",
      focusIcon: "/assets/smile-focus.svg",
      to: "/contact",
      color: "text-orange",
      class: "-rotate-5"
    },
    {
      label: "switch",
      icon: "/assets/switch.svg",
      focusIcon: "/assets/smile-focus.svg",
      color: "text-orange",
      class: "rotate-5"
    },
  ];

  return (
    <nav className="w-full px-6 md:px-40 py-4 flex flex-col md:flex-row items-center justify-between">
      <h1 className="text-2xl font-roboto font-medium uppercase cursor-pointer text-lime" onClick={
        () => { 
          setIsItem('home');
          navigate('/')
        }
      }
        >
        db
      </h1>
    <div className="h-0.5 w-full border-t border-translime/10 absolute top-16 md:top-22 right-0"></div>
      <div className="flex gap-6 md:gap-10 mt-4 md:mt-0 flex-wrap justify-center relative md:top-10">
        {navItems.map((item) => (
          <div
            key={item.label}
            className={`flex flex-col items-center gap-2 cursor-pointer transform text-offwhite transition hover:scale-110 ${item.class} ${item.label === isItem? "hover:text-pink text-pink " : " hover:text-lime" }`}
            onClick={() => { setIsItem(item.label); navigate(item.to)}}
          >
            <img src={item.label === isItem? item.focusIcon : item.icon} alt={item.label} className="w-12 h-12 sm:w-15 sm:h-15 object-contain" />
            <p className="text-md font-semibold ">{item.label}</p>
          </div>
        ))}
      </div>
    </nav>
  );
}


