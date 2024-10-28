import { posts } from "@/.velite";

export const getBlogByCategory = (category: string) => {
  return posts.filter((post) => post.category === category);
};

export const categories = [
  "general",
  "news",
  
] as const;
export type categories = (typeof categories)[number];

export const loadingVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};
