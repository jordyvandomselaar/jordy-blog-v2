import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import Masonry from "react-masonry-component";
import Box from "../components/Box";
import Flex from "../components/Flex";
import Image from "../components/Image";
import PostCard from "../components/PostCard";
import Text from "../components/Text";
import Layout from "../layouts/Layout";
import { BlogPost, getAllBlogPosts } from "../services/posts";

export const getStaticProps: GetStaticProps = async (context) => {
    const blogPosts = getAllBlogPosts();

    return {
        props: {
            blogPosts,
        },
    };
};

export interface HomeProps {
    blogPosts: BlogPost[];
}

const Home: FunctionComponent<HomeProps> = ({ blogPosts }) => {
    return (
        <>
        <Head>
            <title>jordy.app</title>
        </Head>
        <Layout>
            <Layout.SiteName />
            <Layout.Content>
                <Box pt={3}>
                <Flex flexDirection="column" alignItems={["center", "unset"]}>
                    <Box py={3} px={3} width="100%">
                        <Box  pb={[5,6]}>
                            <Flex flexDirection="row" justifyContent="center" alignItems="center">
                                <Box width={75}>
                                    <Image
                                        borderRadius="50%"
                                        src={require("../assets/images/jordy.jpeg")}
                                        alt=""
                                    />
                                </Box>
                                <Box width={275} pl={2}>
                                    <Text>
                                        <Text as="a" variant="link" href="https://twitter.com/Jordy_vD_" target="_blank">Jordy van Domselaar's</Text> blog. Feel free to send me a DM!
                                    </Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Masonry>
                            {blogPosts.map((blogPost) => (
                                <Box width={["100%", "300px"]} ml={[0, 4]} mb={4} key={blogPost.title}>
                                    <Link href={blogPost.url}>
                                        <Text
                                            as="a"
                                            variant="link"
                                            textDecoration="none"
                                            href={blogPost.url}
                                        >
                                            <PostCard
                                                title={blogPost.title}
                                                intro={blogPost.intro}
                                                image={blogPost.image}
                                                bg={blogPost.imageColor}
                                                readTime={blogPost.readTime}
                                                date={blogPost.date}
                                            />
                                        </Text>
                                    </Link>
                                </Box>
                            ))}
                        </Masonry>
                    </Box>
                </Flex>
                </Box>
            </Layout.Content>
            <Layout.Footer />
        </Layout>
        </>
    );
};

export default Home;
