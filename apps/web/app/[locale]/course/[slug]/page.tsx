// @import Next helpers
import dynamic from "next/dynamic";
// @import Custom Components
import { Breadcrumb } from "@/components/breadcrumb";
import { CourseContent } from "@/components/course/content";
import { Header } from "@/components/header";
import { FeaturedReview } from "@/components/review";
import { CourseDetailHeader } from "@/components/course/header";
import { CourseCard } from "@/components/course/card";
import {
  CheckList,
  BulletList,
  CoursesToBuyList,
} from "@/components/course/list";
// @import Utils
import { slugToTitle } from "@/utils/formatter";
// @import Mock data
import courseDetailData from "@/data/course-detail.json";

const SeeMoreText = dynamic(
  async () => await import("@/components/see-more-text/see-more-text"),
  { ssr: false }
);

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const {
    alsoBoughtCourses,
    courseCardContent,
    courseContent,
    courseDescription,
    courseDetail,
    courseRequirements,
    featureReview,
    whatYouWillLearnItems,
  } = courseDetailData;

  const breadcrumbItems = [
    { label: "IT and Software", link: "/category/it-and-software" },
    {
      label: "IT Certification",
      link: "/category/it-and-software/it-certification",
    },
    { label: slugToTitle(slug) },
  ];

  return (
    <>
      <Header showNavigation={false} />
      <main className="relative">
        <div className="bg-[#2d2f31] text-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="py-12 lg:max-w-[600px] xl:max-w-[700px] px-10 lg:px-0 lg:mr-[24rem]">
              <Breadcrumb items={breadcrumbItems} />
              <CourseDetailHeader {...courseDetail} />
            </div>
          </div>
        </div>
        <div className="absolute top-12 lg:block hidden right-[4rem] xl:mr-[10rem]">
          <CourseCard {...courseCardContent} />
        </div>
        <div className="max-w-[1200px] mx-auto pt-8 px-10 xl:px-0">
          <div className="lg:max-w-[600px] xl:max-w-[700px] mr-[24rem] w-full">
            <CheckList
              title="What you'll learn"
              items={whatYouWillLearnItems}
            />
            <CourseContent
              title="Course Content"
              sections={courseContent as any}
              length="27h 11m"
            />
            <BulletList items={courseRequirements} title="Requirements" />
            <div className="w-full my-10">
              <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
                Description
              </h2>
              <SeeMoreText
                text={
                  <span
                    dangerouslySetInnerHTML={{ __html: courseDescription }}
                  />
                }
              />
            </div>
            <div className="w-full my-10">
              <FeaturedReview {...featureReview} />
            </div>
            <div className="w-full my-10">
              <CoursesToBuyList coursesToBuy={alsoBoughtCourses} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
