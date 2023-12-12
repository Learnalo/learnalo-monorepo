"use client";
// @import React hooks
import { useState } from "react";
// @import Hero icons
import { LanguageIcon } from "@heroicons/react/24/solid";

export default function TranslationList({
  translations,
}: {
  translations: string[];
}) {
  const [expanded, setExpanded] = useState(false);
  const showCount = 2;
  const remainingCount = translations.length - showCount;

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const renderTranslations = () => {
    if (expanded) {
      return translations.join(", ");
    } else {
      const displayedLanguages = translations.slice(0, showCount).join(", ");
      return displayedLanguages;
    }
  };

  return (
    <div className={`flex gap-1 ${expanded ? "items-start" : "items-center"}`}>
      <LanguageIcon className={`w-4 h-4 flex-none ${expanded ? "mt-1" : ""}`} />
      <p>{renderTranslations()}</p>
      {translations.length > showCount && (
        <button
          className={`text-blue-500 focus:outline-none hover:underline whitespace-nowrap ${
            expanded ? "mt-auto" : ""
          }`}
          onClick={handleClick}
        >
          {expanded ? "Show less" : `(${remainingCount}) more`}
        </button>
      )}
    </div>
  );
}
