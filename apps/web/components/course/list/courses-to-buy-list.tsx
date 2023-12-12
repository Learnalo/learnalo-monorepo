"use client";
// @import React hooks
import { useState } from "react";
// @import Next Components
import Image from "next/image";
import Link from "next/link";
// @import Shadcn UI Components
import { Button } from "@ui/components/ui/button";
// @import Hero Icons
import { HeartIcon } from "@heroicons/react/24/outline";
import { UserGroupIcon } from "@heroicons/react/24/solid";
// @import Utils
import { formatNumberToString } from "@/utils/formatter";

interface ICourse {
  image: {
    url: string;
    altText: string;
  };
  title: string;
  rating: number;
  students: number;
  price: {
    current: string;
    previous: string;
  };
  duration: number;
  lastUpdated: string;
  tags: string[];
}

function CourseToBuy(course: ICourse) {
  const [isFavorite, setFavorite] = useState(false);
  return (
    <div className="flex gap-2 border-b-2 border-solid py-4">
      <Link href={"/"}>
        <Image
          width={60}
          height={60}
          alt={course.image.altText}
          src={course.image.url}
          className="w-[60px] h-[60px]"
        />
      </Link>
      <div className="flex flex-col w-full gap-1">
        <div className="flex justify-between gap-2">
          <Link
            href="/"
            className="font-bold cursor-pointer hover:underline text-base line-clamp-2 max-w-[18rem] text-ellipsis overflow-hidden whitespace-normal leading-5"
          >
            {course.title}
          </Link>
          <div className="flex gap-8 items-start">
            <div className="flex gap-1 items-center">
              <p className="font-bold text-sm">{course.rating}</p>
              <span className="text-[#b4690e]">&#9733;</span>
            </div>
            <div className="flex gap-1 items-center">
              <UserGroupIcon className="w-4 h-4" />
              <p className="text-sm">{formatNumberToString(course.students)}</p>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-sm font-bold whitespace-nowrap">
                {course.price.current}
              </p>
              <p className="text-xs line-through whitespace-nowrap text-slate-700">
                {course.price.previous}
              </p>
            </div>
          </div>
          <div>
            <Button
              className="border-2 rounded-full h-10 w-10 p-0"
              variant="outline"
              onClick={() => setFavorite(true)}
            >
              <HeartIcon
                className="w-5 h-5"
                fill={`${isFavorite ? "black" : "none"}`}
              />
            </Button>
          </div>
        </div>
        <div className="flex gap-1">
          {!!course.tags.length && (
            <div className="bg-[#eceb98] text-[#3d3c0a] text-xs font-bold py-1 px-2 w-fit">
              {course.tags[0]}
            </div>
          )}
          <p className="text-sm text-[#1e6055] font-bold">
            {course.duration} total hours -
          </p>
          <p className="text-sm">Updated {course.lastUpdated}</p>
        </div>
      </div>
    </div>
  );
}

export default function CoursesToBuyList({
  coursesToBuy,
  initialCoursesToShow = 6,
}: {
  coursesToBuy: any[];
  initialCoursesToShow?: number;
}) {
  const [coursesToShow, setCoursesToShow] = useState(initialCoursesToShow);
  const showLess = coursesToShow > coursesToBuy?.length;

  const handleShowClick = () => {
    if (showLess) {
      setCoursesToShow(initialCoursesToShow);
    } else {
      setCoursesToShow((prev) => prev + 6);
    }
  };

  return (
    <div>
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
        Students also bought
      </h2>
      <div>
        {coursesToBuy.slice(0, coursesToShow).map((course, index) => (
          <CourseToBuy {...course} key={`${course.title}_${index}`} />
        ))}
      </div>
      <Button
        variant="outline"
        className="w-full mt-4 border-black"
        onClick={handleShowClick}
      >
        {showLess ? "Show Less" : "Show More"}
      </Button>
    </div>
  );
}
