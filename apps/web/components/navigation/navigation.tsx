import navigation from "@/data/navigation.json";
import NavItem from "./nav-item";

export default function Navigation() {
  return (
    <nav className="flex flex-row items-center gap-4 justify-center mt-4">
      {navigation.map((nav, index) => (
        <NavItem href={nav.href} className="text-sm" key={index}>
          {nav.name}
        </NavItem>
      ))}
    </nav>
  );
}
