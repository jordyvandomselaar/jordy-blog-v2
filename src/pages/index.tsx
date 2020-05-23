import React, { FunctionComponent } from "react";
import Box from "../components/Box";
import Flex from "../components/Flex";
import PostCard from "../components/PostCard";
import Masonry from "react-masonry-component";
import Text from "../components/Text";
import Image from "../components/Image";
import { GetStaticProps } from "next";
import { BlogPost, getAllBlogPosts } from "../services/posts";
import Link from "next/link";
import Layout from "../layouts/Layout";
import { ListItem, UnOrderedList } from "../components/List";
import Head from "next/head";

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
                <Flex flexDirection="column" alignItems={["center", "unset"]}>
                    <Box py={3} px={3}>
                        <Box px={3} mb={3} pb={5}>
                            <Flex flexDirection="row" justifyContent="center" alignItems="center">
                                <Box width={75}>
                                    <Image
                                        borderRadius="50%"
                                        src={require("../assets/images/jordy.jpeg")}
                                        alt=""
                                    />
                                </Box>
                                <Box width={200} pl={2}>
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
            </Layout.Content>
            <Layout.Footer />
        </Layout>
        </>
    );
};

export default Home;
