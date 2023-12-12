// @import Custom Components
import ReviewStars from "./stars";
import SeeMoreText from "../see-more-text/see-more-text";
// @import Hero Icons
import { BookOpenIcon } from "@heroicons/react/24/outline";

interface IReviewer {
  name: string;
  courses: number;
  reviews: number;
}

interface FeaturedReviewProps {
  reviewer: IReviewer;
  date: string;
  review: string;
}

export default function FeaturedReview({
  reviewer,
  review,
  date,
}: FeaturedReviewProps) {
  return (
    <div className="border border-solid p-9">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
        Featured review
      </h2>
      <div className="flex gap-4">
        <BookOpenIcon className="h-16 w-16 p-2 rounded-full border-2 border-solid" />
        <div>
          <div>
            <h5 className="font-bold text-lg">{reviewer.name}</h5>
          </div>
          <p>{reviewer.courses} courses</p>
          <p>{reviewer.reviews} reviews</p>
        </div>
      </div>
      <div className="flex gap-2 items-center my-2">
        <ReviewStars defaultRating={5} disabled />
        <span>{date}</span>
      </div>

      <SeeMoreText text={review} />
    </div>
  );
}
