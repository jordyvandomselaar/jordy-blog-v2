export interface BlogPost {
    url: string;
    title: string;
    intro: string;
    image: string;
    imageColor?: string;
}

export const getAllBlogPosts = (): BlogPost[] => {
    return [
        {
            title: "From zero to hero with React and TypeScript: Let's build another to-do app!",
            intro: "Table of Contents Summary Intro Getting started Cleaning up Creating your first component Adding basic styling Creating your first interface Creating static components State What is state? Adding…",
            url: "/blog/foo",
            image: "https://firebase.google.com/images/social.png",
            imageColor: "#039BE5"
        },
        {
            title: "From zero to hero with React and TypeScript: Let's build another to-do app!klfmwefeop fkewopfkpewkfpkfopwek fpewkfpwkfop",
            intro: "Table of Contents Summary Intro Getting started Cleaning up Creating your first component Adding basic styling Creating your first interface Creating static components State What is state? Adding2 1312rfwefwwqf",
            url: "/blog/foo123",
            image: "https://miro.medium.com/proxy/1*Q0kFri-mPUsdHLmtqthLBA.jpeg",
        }
    ]
}
