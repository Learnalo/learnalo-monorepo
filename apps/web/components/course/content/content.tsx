"use client";
// @import React Hooks
import { useState } from "react";
// @import Shadcn UI Components
import { Button } from "@ui/components/ui/button";
// @import Custom components and types
import {
  type ICourseSection,
  CourseAccordion,
} from "@/components/course/accordion";

interface CourseContentProps {
  sections: ICourseSection[];
  title: string;
  length: string;
}

export default function CourseContent({
  sections,
  title,
  length,
}: CourseContentProps) {
  const [isCourseSectionOpen, setCourseSectionOpen] = useState(false);
  const lectures = sections.reduce(
    (acc, section) => acc + section.lectures.length,
    0
  );
  const contentDetail = `${sections.length} sections • ${lectures} lectures • ${length} total length`;
  return (
    <div className="w-full my-10">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-4 w-full flex items-center gap-4 justify-between">
        <p>{contentDetail}</p>
        <Button
          variant="link"
          className="font-bold"
          onClick={() => setCourseSectionOpen((prev) => !prev)}
        >
          {isCourseSectionOpen ? "Collapse" : "Expand"} all Sections
        </Button>
      </div>
      <div className="mt-1">
        {sections.map((section: any, index) => (
          <CourseAccordion
            isSectionOpen={isCourseSectionOpen}
            key={`${section.title}_${index}`}
            {...section}
          />
        ))}
      </div>
    </div>
  );
}
