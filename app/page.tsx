import AboutColumn from "@/components/landing page/about-column";
import FeaturedArticle from "@/components/landing page/featured-article";
import NewReviews from "@/components/landing page/new-reviews-column";

export default function Home() {
  return (
    <div className="bg-background w-full lg:p-10 p-6">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-[15%_auto_22%] gap-6">
        <NewReviews />
        <FeaturedArticle />
        <AboutColumn />
      </div>
    </div>
  );
}
