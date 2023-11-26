import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
export default function Search() {
  return (
    <label className="border rounded-full flex items-center py-2 px-4 gap-4">
      <MagnifyingGlassIcon className="w-6 h-6" />
      <input
        className="outline-none placeholder:font-normal"
        placeholder="Search for anything..."
      />
    </label>
  );
}
