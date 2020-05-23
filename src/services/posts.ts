// @ts-ignore
import {frontMatter} from "../pages/**/*.mdx";

export interface BlogPost {
    url: string;
    title: string;
    intro: string;
    image: string;
    imageColor?: string;
    date: string;
    readTime: string;
}

export const getRelativePathFromRootPath = (absolutePath: string) => {
    return absolutePath.match(/.+\//)[0].replace(/.+?src\//, "").replace(/\/$/, "");
}

export const getAllBlogPosts = (): BlogPost[] => {
    return frontMatter
    .sort((a,b) => {
        const aTime = (new Date(a.date)).getTime();
        const bTime = (new Date(b.date)).getTime();

        if(aTime === bTime) return 0;
        if(aTime < bTime) return 1;
        if(aTime > bTime) return -1;
    })
    .map(fm => {
        const path  = getRelativePathFromRootPath(fm.__resourcePath);

        return ({
            title: fm.title ?? "",
            imageColor: fm.imageColor ?? "#FFF",
            image: fm.image ? require(`../${path}/${fm.image}`) : "",
            intro: "",
            url: fm.__resourcePath.replace(/.+?pages/, '').replace(/\.mdx$/, '').replace(/\/index$/, ''),
            readTime: fm.readingTime,
            date: new Date(fm.date).toLocaleDateString(undefined, {
                month: "long",
                day: "numeric",
                year: "numeric"
            })
        });
    })
}
