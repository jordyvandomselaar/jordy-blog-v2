import React from "react";
import {MDXProvider} from "@mdx-js/react"
import Layout from "./Layout";
import Text from "../Text";
import {OrderedList, UnOrderedList} from "../List";
import Box from "../Box";
import Link from "next/link";
import CodeBlock from "../CodeBlock";
import {getAllBlogPosts, getRelativePathFromRootPath} from "../services/posts";
import {GetStaticProps} from "next";
import Image from "../Image";
import Flex from "../Flex";

const components = {
    pre: props => <div {...props} />,
    // @ts-ignore
    code: ({children, ...props}) => <CodeBlock code={children} {...props}/>,
    p: Text,
    h1: props => <Text as="h1" {...props}/>,
    h2: props => <Text as="h2" {...props}/>,
    h3: props => <Text as="h3" {...props}/>,
    h4: props => <Text as="h4" {...props}/>,
    h5: props => <Text as="h5" {...props}/>,
    h6: props => <Text as="h6" {...props}/>,
    ul: props => <UnOrderedList {...props}/>,
    ol: props => <OrderedList {...props}/>,
}

const BlogLayout = frontMatter => ({children}) => {
    const postPath = getRelativePathFromRootPath(frontMatter.__resourcePath);
    const headerImagePath = require(`../${postPath}/${frontMatter.image}`);

    return (
        <MDXProvider components={components}>
            <Box position="absolute" left={0} top={0} right={0} bottom={0} bg="background" overflow="auto">
                <Box>
                    <Link href="/">
                        <a href="/">
                            <Text variant="logo" textAlign="center">Jordy.app</Text>
                        </a>
                    </Link>
                </Box>
                <Box px={[3, "25%"]}>
                    <Box position="relative">
                        <Image src={headerImagePath} width="100%" bg={frontMatter.imageColor}/>
                        <Box position="absolute" width="100%" height="100%" top="0" bg="rgba(0,0,0,.5)">
                            <Flex width="100%" height="100%" flexDirection="row" alignItems="center">
                                <Box p="25px">
                                    <Text as="h1" color="#FFF">{frontMatter.title}</Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box>
                        {children}
                    </Box>
                </Box>
            </Box>
        </MDXProvider>
    );
};

export default BlogLayout;
