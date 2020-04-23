import React from "react";
import {MDXProvider} from "@mdx-js/react"

const components = {
    pre: props => <div {...props} />,
    code: props => <pre style={{color: 'tomato'}} {...props} />
}

const BlogLayout = frontMatter => ({children}) => {
    return (
        <MDXProvider components={components}>
            <div>
                {children}
            </div>
        </MDXProvider>
    );
};

export default BlogLayout;
