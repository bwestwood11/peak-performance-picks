import { posts } from "@/.velite"
import Image from "next/image";
import Link from "next/link";

const FeaturedArticle = () => {
  const featuredArticle = posts[0];

  return (
    <Link href={`/blog/${featuredArticle.slug}`}>
      {featuredArticle.absolutecover && <Image src={featuredArticle.absolutecover} alt="featured article" width={400} height={400} className="w-full" />}
      <h2 className="font-bold text-3xl mt-3">{featuredArticle.title}</h2>
      <p className="text-sm text-muted-foreground">{featuredArticle.description}</p>
    </Link>
  )
}

export default FeaturedArticle;