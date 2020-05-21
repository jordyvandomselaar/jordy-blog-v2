import React, {FunctionComponent} from "react";
import Box from "../components/Box";
import Flex from "../components/Flex";
import PostCard from "../components/PostCard";
import Masonry from "react-masonry-component";
import Text from "../components/Text";
import Image from "../components/Image";
import {GetStaticProps} from "next";
import {BlogPost, getAllBlogPosts} from "../services/posts";
import Link from "next/link";
import Layout from "../layouts/Layout";

export const getStaticProps: GetStaticProps = async context => {
    const blogPosts = getAllBlogPosts();

    console.log(blogPosts);

    return {
        props: {
            blogPosts
        }
    }
}

export interface HomeProps {
    blogPosts: BlogPost[]
}

const Home: FunctionComponent<HomeProps> = ({blogPosts}) => {
    return <Layout>
            <Flex flexDirection="column">
                <Box py={3} px={3}>
                    <Box px={3} marginBottom={3}>
                        <Flex flexDirection="row" justifyContent="center">
                            <Box width={100}>
                                <Image borderRadius="50%"
                                       src={require("../assets/images/jordy.jpeg")}
                                       alt=""/>
                            </Box>
                            <Box width={200} pl={2}>
                                <Text>
                                    I translate human language to code and code to machine language.
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                    <Masonry>
                        {blogPosts.map(blogPost => (
                            <Box width="300px" mx={3} key={blogPost.title}>
                                <Link href={blogPost.url}>
                                    <a href={blogPost.url}>
                                        <PostCard title={blogPost.title}
                                                  intro={blogPost.intro}
                                                  image={blogPost.image}
                                                  bg={blogPost.imageColor}/>
                                    </a>
                                </Link>
                            </Box>
                        ))}
                    </Masonry>
                </Box>
            </Flex>
    </Layout>
};

export default Home;
