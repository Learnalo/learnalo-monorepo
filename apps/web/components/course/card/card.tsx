"use client";
// @import Next Compoents
import Image from "next/image";
// @import Shadcn UI Components
import { Button } from "@ui/components/ui/button";
// @import Utils
import { cn } from "@ui/lib/utils";

interface CourseCardProps {
  className?: string;
  courseItems: string[];
  image: {
    src: string;
    altText: string;
  };
}

export default function CourseCard({
  className,
  courseItems,
  image,
}: CourseCardProps) {
  const courseCardButtons = [
    { text: "Share", onClick: () => {} },
    { text: "Gift this course", onClick: () => {} },
    { text: "Apply Coupon", onClick: () => {} },
  ];
  return (
    <div className={cn("w-[340px] bg-white", className)}>
      <Image
        src={image.src}
        alt={image.altText}
        width={"100"}
        height={"100"}
        quality={100}
        className="w-full h-auto border border-solid"
      />
      <div className="w-full flex flex-col items-center p-4 border-solid border border-[#D9D9D9]">
        <Button className="w-full rounded-none">Go to Course</Button>
        <div className="w-full mt-8">
          <h5 className="text-base font-semibold tracking-tight">
            This course includes:
          </h5>
          <ul className="mt-2 flex flex-col gap-1">
            {courseItems.map((item, index) => (
              <li className="ml-4" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center flex-wrap pt-4">
          {courseCardButtons.map(({ text, onClick }, index) => (
            <Button
              variant="link"
              onClick={onClick}
              key={`${text}_${index}`}
              className="underline font-bold"
            >
              {text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
