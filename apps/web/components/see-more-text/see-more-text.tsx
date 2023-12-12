"use client";
// @import React Hooks
import { useEffect, useRef, useState } from "react";
// @import Shadcn UI Components
import { Button } from "@ui/components/ui/button";
// @import Utils
import { cn } from "@ui/lib/utils";

export default function SeeMoreText({
  text,
  className,
}: {
  text: string | React.ReactNode;
  className?: string;
}) {
  const [showExpandActions, setExpandActions] = useState(false);
  const [expand, setExpand] = useState(false);
  const contentRef = useRef(null);
  const maskHeight = 240;

  useEffect(() => {
    if (contentRef?.current) {
      if (contentRef.current.offsetHeight > maskHeight) {
        setExpandActions(true);
      }
    }
  }, []);

  return (
    <div>
      <div
        className={cn("overflow-hidden", className)}
        style={{
          maxHeight: showExpandActions
            ? expand
              ? "none"
              : `${maskHeight}px`
            : "none",
          WebkitMaskImage: showExpandActions
            ? expand
              ? "none"
              : "linear-gradient(#ffffff,#ffffff,rgba(255,255,255,0))"
            : "none",
        }}
      >
        <p className="prose" ref={contentRef}>
          {text}
        </p>
      </div>
      {showExpandActions && (
        <Button
          variant="default"
          className="mt-4"
          onClick={() => setExpand((prev) => !prev)}
        >
          {expand ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
}
