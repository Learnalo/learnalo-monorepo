// @import Hero icons
import { ClockIcon, GlobeAltIcon } from "@heroicons/react/24/solid";
// @import Custom Components
import { TranslationList } from "@/components/course/list";

interface CourseDetailHeaderProps {
  title: string;
  description: string;
  author: string;
  lastUpdated: string;
  language: string;
  translations: string[];
}

function LeadElement({
  IconComponent,
  text,
}: {
  IconComponent: any;
  text: string;
}) {
  return (
    <div className="flex gap-1 items-center">
      <IconComponent className="w-4 h-4" />
      <p>{text}</p>
    </div>
  );
}

export default function CourseDetailHeader({
  author,
  lastUpdated,
  description,
  language,
  title,
  translations,
}: CourseDetailHeaderProps) {
  return (
    <div>
      <h2 className="mb-2 text-3xl font-semibold tracking-tight">{title}</h2>
      <h4 className="mb-4 text-xl font-semibold tracking-tight">
        {description}
      </h4>
      <div className="text-sm">
        <p className="mb-2">Created by {author}</p>
        <div className="flex gap-4 items-center flex-wrap">
          <LeadElement
            IconComponent={ClockIcon}
            text={`Last Updated: ${lastUpdated}`}
          />
          <LeadElement IconComponent={GlobeAltIcon} text={language} />
          <TranslationList translations={translations} />
        </div>
      </div>
    </div>
  );
}
