"use client";
// @import React hooks
import { useState } from "react";

interface StarProps {
  disabled?: boolean;
  currentRating: number;
  hover: any;
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
  setHover: React.Dispatch<React.SetStateAction<any>>;
}

function Star({
  disabled = true,
  currentRating,
  setHover,
  setRating,
  hover,
  rating,
}: StarProps) {
  return (
    <label>
      <input
        type="radio"
        name="rating"
        className="hidden"
        disabled
        value={currentRating}
        onChange={() => setRating(currentRating)}
      />
      <span
        className="star"
        style={{
          color:
            currentRating <= ((!disabled && hover) || rating)
              ? "#b4690e"
              : "#e4e5e9",
        }}
        onMouseEnter={() => !disabled && setHover(currentRating)}
        onMouseLeave={() => !disabled && setHover(null)}
      >
        &#9733;
      </span>
    </label>
  );
}

export default function ReviewStars({
  defaultRating = null,
  disabled = true,
  totalStars = 5,
}: {
  defaultRating?: number | null;
  disabled?: boolean;
  totalStars?: number;
}) {
  const [rating, setRating] = useState(defaultRating);
  const [hover, setHover] = useState(null);

  return (
    <div className="w-fit">
      {[...Array(totalStars)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <Star
            disabled={disabled}
            currentRating={currentRating}
            hover={hover}
            rating={rating}
            setHover={setHover}
            setRating={setRating}
            key={`${star}_${index}`}
          />
        );
      })}
    </div>
  );
}
