// @import Hero Icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

interface IBreadcrumbItem {
  label: string;
  link?: string;
  children?: boolean;
}

interface Props {
  items: IBreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <div className="flex mb-2">
      <ol className="flex items-center space-x-4">
        {items.map((item, index) => (
          <li key={index} className="flex gap-2 font-bold items-center">
            {item.link ? (
              <a href={item.link} className="text-blue-400 hover:underline">
                {item.label}
              </a>
            ) : (
              <span className="text-white">{item.label}</span>
            )}
            {index !== items.length - 1 && (
              <ChevronRightIcon className="h-3 w-3" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
