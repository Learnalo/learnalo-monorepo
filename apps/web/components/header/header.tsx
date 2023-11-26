import {
  BellIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Avatar, AvatarFallback, AvatarImage } from "ui/components/ui/avatar";
import NavItem from "../navigation/nav-item";
import { Search } from "../search";

interface Props {}

export default function Header({}: Props) {
  return (
    <header className="p-4">
      {/* search */}
      <div className="flex items-center gap-4 justify-center">
        <h1 className="text-2xl">Learnalo</h1>
        <NavItem href="/">Categories</NavItem>
        <Search />
        <NavItem href="/">Udemy Business</NavItem>
        <NavItem href="/">Instructor</NavItem>
        <NavItem href="/">My Learning</NavItem>
        {/* Actions Menu */}
        <div className="flex gap-4">
          <button>
            <HeartIcon className="w-6 h-6" />
          </button>
          <button>
            <ShoppingCartIcon className="w-6 h-6" />
          </button>
          <button>
            <BellIcon className="w-6 h-6" />
          </button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {/* main nav */}
      <nav></nav>
    </header>
  );
}
