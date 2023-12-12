export default function BulletList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="w-full my-10">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <ul className="pl-4 mt-5 flex flex-col gap-2">
        {items.map((item, index) => (
          <li className="list-disc pl-4" key={`${item}_${index}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
