import glob from "glob";

import {frontMatter} from "../pages/**/*.mdx";

export interface BlogPost {
    url: string;
    title: string;
    intro: string;
    image: string;
    imageColor?: string;
}

export const getAllBlogPosts = (): BlogPost[] => {
  return frontMatter.map(fm => ({
      title: fm.title ?? "",
      imageColor: "#FFF",
      image: "",
      intro: "",
      url: fm.__resourcePath.replace(/.+?pages/, '').replace(/\.mdx$/, '').replace(/\/index$/, '')
  }))
}
