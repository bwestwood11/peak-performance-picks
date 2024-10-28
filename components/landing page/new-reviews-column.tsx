import { posts } from "@/.velite"
import { FormatTime } from "@/lib/utils";
import Link from "next/link";

const NewReviews = () => {
  const newReviews = posts.slice(0, 4);
  console.log(newReviews)
  return (
    <div>
      <h3 className="font-medium text-lg mb-10">New Reviews</h3>
      <div>
        {newReviews.map((review) => {
            return (
              <Link key={review.title} href={`/blog/${review.slug}`}>
                <h4 className="underline text-sm cursor-pointer hover:text-primary">{review.title}</h4>
                <p className="text-xs text-muted-foreground mt-1">{FormatTime(review.date)}</p>
                </Link>
            )
        })}
      </div>
    </div>
  )
}

export default NewReviews