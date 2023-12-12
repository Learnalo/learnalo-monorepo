"use client";
// @import React hooks
import { useEffect, useState } from "react";
// @import Next Components
import Link from "next/link";
// @import Shadcn UI Components
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "ui/components/ui/collapsible";
// @import Hero Icons
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { CameraIcon, DocumentIcon } from "@heroicons/react/24/outline";

type LectureType = "video" | "text";

export interface ILecture {
  type: LectureType;
  title: string;
  preview?: boolean;
  minutes: number;
  id: string;
}

function LectureItem({ type, title, preview, id, minutes }: ILecture) {
  const iconByType = {
    video: CameraIcon,
    text: DocumentIcon,
  };
  const ContentComponent = preview ? Link : "p";
  const IconComponent = iconByType[type];
  const lecturePath = `/learn/lecture/${id}`;
  const linkClasses = "underline text-blue-600";

  return (
    <li className="ml-1 py-2">
      <div className="flex items-center gap-4">
        <IconComponent className="w-4 h-5" />
        <ContentComponent
          className={preview ? linkClasses : ""}
          href={preview ? lecturePath : ""}
        >
          {title}
        </ContentComponent>
        <div className="ml-auto flex gap-6">
          {preview && (
            <Link className={linkClasses} href={lecturePath}>
              Preview
            </Link>
          )}
          <p>{minutes}</p>
        </div>
      </div>
    </li>
  );
}

export interface ICourseSection {
  title: string;
  lectures: ILecture[];
}

export default function CourseAccordion({
  isSectionOpen = false,
  title,
  lectures,
}: ICourseSection & { isSectionOpen?: boolean }) {
  const [isOpen, setOpen] = useState(false);
  const totalLectures = lectures.length;
  const sectionMinutes = lectures.reduce(
    (acc, lecture) => lecture.minutes + acc,
    0
  );

  useEffect(() => {
    setOpen(isSectionOpen);
  }, [isSectionOpen]);

  return (
    <Collapsible open={isOpen} onOpenChange={setOpen} className="w-full">
      <CollapsibleTrigger asChild>
        <div className="py-4 px-6 cursor-pointer bg-[#f7f9fa] border-solid border flex gap-3 items-center">
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
          <h3 className="font-bold">{title}</h3>
          <p className="ml-auto">
            <span>
              {totalLectures} lectures • <span>{sectionMinutes} min</span>
            </span>
          </p>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-6 py-4 border border-solid">
          <ul className="flex flex-col gap-2">
            {lectures.map((lecture, index) => (
              <LectureItem key={`${lecture.title}_${index}`} {...lecture} />
            ))}
          </ul>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
