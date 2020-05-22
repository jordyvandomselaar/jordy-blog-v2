import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Text from "../components/Text";
import { OrderedList, UnOrderedList, ListItem } from "../components/List";
import Box from "../components/Box";
import Link from "next/link";
import CodeBlock from "../components/CodeBlock";
import { getRelativePathFromRootPath } from "../services/posts";
import Image from "../components/Image";
import Flex from "../components/Flex";
import Tip from "../components/Tip";
import Layout from "./Layout";
import Code from "../components/Code";
import Head from "next/head";

const components = {
    pre: (props) => <div {...props} />,
    // @ts-ignore
    code: ({ children, ...props }) => <CodeBlock code={children} {...props} />,
    p: Text,
    Text: Text,
    h1: props => <Text as="h1" variant="h1" {...props} />,
    h2: props => <Text as="h2" variant="h2" {...props} />,
    h3: props => <Text as="h3" variant="h3" {...props} />,
    h4: props => <Text as="h4" variant="h4" {...props} />,
    h5: props => <Text as="h5" variant="h5" {...props} />,
    h6: props => <Text as="h6" variant="h6" {...props} />,
    a: props => <Text as="a" variant="link" {...props} />,
    inlineCode: props => <Text as="code" variant="code" {...props} />,
    ul: UnOrderedList,
    ol: OrderedList,
    li: ListItem,
    Image: Image,
    Link: Link,
    Tip: Tip,
};

const BlogLayout = (frontMatter) => ({ children }) => {
    const postPath = getRelativePathFromRootPath(frontMatter.__resourcePath);
    const headerImagePath = require(`../${postPath}/${frontMatter.image}`);

    return (
        <MDXProvider components={components}>
            <Head>
            <title>jordy.app | {frontMatter.title}</title>
            </Head>
            <Layout>
                <Layout.SiteName />
                <Layout.Content>
                <Box variant="container">
                    <Box position="relative" mb="75px" mt={["50px"]}>
                        <Image
                            src={headerImagePath}
                            width="100%"
                            bg={frontMatter.imageColor}
                        />
                        <Box
                            position="absolute"
                            width="100%"
                            height="100%"
                            top="0"
                            bg="rgba(0,0,0,.5)"
                        >
                            <Flex
                                width="100%"
                                height="100%"
                                flexDirection="row"
                                alignItems="center"
                            >
                                <Box p="25px">
                                    <Text as="h1" color="#FFF">
                                        {frontMatter.title}
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                    </Box>
                    <Box>{children}</Box>
                </Box>
                </Layout.Content>
            </Layout>
        </MDXProvider>
    );
};

export default BlogLayout;
