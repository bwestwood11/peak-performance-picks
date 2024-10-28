import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AbsoluteUrl, FormatTime } from "@/lib/utils";
import Image from "next/image";
import { DashboardTableOfContents } from "@/components/blog/mdx/toc";
import {
  MotionDiv,
  MotionHeading,
  MotionParagraph,
  MotionSpan,
} from "@/components/blog/motion";
import "../styles.css";
import "../blog-styles.css";

import { loadingVariants } from "@/lib/blog";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import ProgressBar from "./_components/Progress-Bar";
import { posts } from "@/.velite";
import { Mdx } from "@/components/blog/mdx/mdxComponents";

type Props = {
  params: {
    slug: string;
  };
};

function getPageBySlug(slug: string) {
  return posts.find((post) => post.slug === slug);
}


export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog =  getPageBySlug(slug);
  if (!blog) notFound();
  return (
    <div className="flex mx-auto max-w-7xl px-16 max-md:px-8 py-8 scroll-m-10 w-full   ">
      <ProgressBar />
      <article className="mx-auto flex-1  max-w-3xl w-full flex flex-col gap-3  ">
        <div className="mb-4 text-left text-foreground">
          <time dateTime={blog.date} className="mb-1 text-xs text-gray-600">
            {FormatTime(blog.date)}
          </time>
          <MotionHeading
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-3"
          >
            {blog.title}
          </MotionHeading>
          <div className="flex gap-3 items-center ">
            {/* <span>{blog.timeToRead.minutes.toFixed(0)} minutes read</span> */}
            <Image
              width={30}
              height={30}
              className="rounded-full bg-foreground object-cover size-8 aspect-square "
              alt="Brett Westwood"
              src="/bwestwood.webp"
            />
            <div className="flex flex-col ">
              <MotionSpan
                initial="initial"
                animate="animate"
                exit="exit"
                variants={loadingVariants}
              >
                {blog.authors[0]}
              </MotionSpan>
              <MotionSpan
                initial="initial"
                animate="animate"
                exit="exit"
                variants={loadingVariants}
                className="text-sm text-gray-600"
              >
                {blog.metadata.readingTime} min. read
              </MotionSpan>
            </div>
          </div>
        </div>
        <MotionDiv
          initial="initial"
          animate="animate"
          exit="exit"
          variants={loadingVariants}
          className=" w-full block mb-3 h-auto relative bg-foreground"
        >
        </MotionDiv>
        <Mdx code={blog.body} />
        <hr />
        <div className="w-full grid gap-1 place-content-center h-[200px] bg-muted rounded-2xl text-center">
          <p className="text-muted-foreground font-bold text-sm px-2">
           Receive a FREE website audit on performance, SEO, accessibility, best practices, and PWA.{" "}
          </p>{" "}
          <h2 className="font-black text-xl">DevVibe Studio</h2>
          <Link
            href="/contact"
            className={buttonVariants({
              className: "w-fit mt-4 mx-auto", variant: "outline"
            })}
          >
            Try Today
          </Link>
        </div>
        <hr />
        {blog.tags.length >= 1 && (
          <Separator decorative className="h-0.5 w-full bg-foreground/25" />
        )}
        <div>
          {blog.tags?.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </article>

      <div className="xl:block hidden w-[300px] py-4 border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 xl:sticky top-32 max-h-[80vh] overflow-hidden overflow-y-auto">
        <div className="flex gap-3">
          {"TABLE OF CONTENT".split(" ").map((el, i) => (
            <MotionParagraph
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.25,
                delay: i / 10,
              }}
              className="text-lg font-semibold capitalize cursor-pointer font-league tracking-widest"
              key={i}
            >
              {el}
              {"  "}
            </MotionParagraph>
          ))}
        </div>
        <div className="mt-4 font-in text-sm ">
          <DashboardTableOfContents toc={blog.toc} />
        </div>
      </div>
    </div>
  );
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPageBySlug(slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `${process.env.SITE_URL}/blog/${post.slug}`,
    },
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: AbsoluteUrl(post.permalink),
      images: post.absolutecover
        ? [
            {
              url: post.absolutecover.src,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.absolutecover
        ? [
            {
              url: post.absolutecover.src,
              width: 1200,
              height: 630,
              alt: post.title,
            },
          ]
        : [],
    },
  };
}

export function generateStaticParams(): Props["params"][] {
  return posts.map((post) => ({ slug: post.slug }));
}
