// @import Hero Icons
import { CheckIcon } from "@heroicons/react/20/solid";

export default function CheckList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border border-solid py-6 px-4">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <ul className="mt-6 flex flex-wrap gap-4">
        {items.map((text, index) => (
          <li
            className="w-[calc(50%-1.2rem)] flex gap-2 items-start"
            key={index}
          >
            <CheckIcon className="w-4 h-5 flex-none" />
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
