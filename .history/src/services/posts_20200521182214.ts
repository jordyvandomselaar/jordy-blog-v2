// @ts-ignore
import {frontMatter} from "../pages/**/*.mdx";

export interface BlogPost {
    url: string;
    title: string;
    intro: string;
    image: string;
    imageColor?: string;
}

export const getRelativePathFromRootPath = (absolutePath: string) => {
    return absolutePath.match(/.+\//)[0].replace(/.+?src\//, "").replace(/\/$/, "");
}

export const getAllBlogPosts = (): BlogPost[] => {
    console.log(frontMatter);

    return frontMatter.map(fm => {
        const path  = getRelativePathFromRootPath(fm.__resourcePath);

        return ({
            title: fm.title ?? "",
            imageColor: fm.imageColor ?? "#FFF",
            image: fm.image ? require(`../${path}/${fm.image}`) : "",
            intro: "",
            url: fm.__resourcePath.replace(/.+?pages/, '').replace(/\.mdx$/, '').replace(/\/index$/, '')
        });
    })
}
