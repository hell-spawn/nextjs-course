import Image from "next/image";
import { IoLogoReact, IoBarChartOutline, IoCalculatorOutline, IoFootball } from "react-icons/io5";
import { SidebarItem } from "./SidebarItem";


const menuItems = [
  {
    title: "Dashboard",
    subtitle: "Data Overview",
    icon: <IoBarChartOutline size={40} />,
    path: "/dashboard/main",
  },
  {
    title: "Counter",
    subtitle: "Counter Example",
    icon: <IoCalculatorOutline size={40} />,
    path: "/dashboard/counter",
  },
  {
    title: "Pokemons",
    subtitle: "Pokemons Page",
    icon: <IoFootball size={40} />,
    path: "/dashboard/pokemons",
  },
]

export const Sidebar = () => {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 left-0 overflow-y-scroll">
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">
          <IoLogoReact className="inline-block text-2xl mr-2" />
          <span className="text-blue-600">Dash</span>board
          <p className="text-slate-500 text-sm">Example page NextJs</p>
        </h1>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              width={80}
              height={80}
              alt="Avartar User" />
          </span>
          <span className="text-sm md:text-base font-bold">
            Hell Spawn
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
          menuItems.map(menuItem => (
            <SidebarItem key={menuItem.path} {...menuItem} />
          ))
        }
      </div>
    </div>
  );
}

