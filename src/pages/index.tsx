import React, {FunctionComponent} from "react";
import Box from "../Box";
import Flex from "../Flex";
import PostCard from "../PostCard";
import Masonry from "react-masonry-component";
import Text from "../Text";
import Image from "../Image";
import {GetStaticProps} from "next";
import {BlogPost, getAllBlogPosts} from "../services/posts";

export const getStaticProps: GetStaticProps = async context => {
    const blogPosts = getAllBlogPosts();

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
    return <Box position="absolute" bg="white" left={0} top={0} right={0} bottom={0}>
        <Flex flexDirection="column">
            <Box>
                <Text as="h1" textAlign="center">Jordy's Blog</Text>
            </Box>
            <Box py={3} px={3}>
                <Box px={3} marginBottom={3}>
                    <Flex flexDirection="row" justifyContent="center">
                        <Box width={100}>
                            <Image borderRadius="50%"
                                   src="https://lh3.googleusercontent.com/mF6gXIx9jzFq8YW6XPcxTyEeNXXvu-iPwA8O8C92DVTD5RLo0f5HGp1k-HHZemqij_VhLPSR_cxOg7BE9AihLdhzEhFA0-P_oAmBAnVnxhJuQVF6BtfUXirRR0zL_w6_qbieLxSYET6YiP52hxW9u6wK5B5PG8p0YKIhNbKqSDx35BuAy7yTg5o7eYDXNfUk6wra-mTCX6DR5HWLil35R990HH1RM4pFq3Ki2ZA0mXtR4MKJpMAQLzD69MQzqIlME9N-0Kip-i0yFpLDMD0mZHVaTY5bwXiAeHn8o66GPwRUg935r3tDf09Ndy5t3fO2d2MjtS-k1k3NkHjC3q7hPttNQTr81pyauzRpBzXwfvfeHbg5tovEp3YtUEWl8oH5sl837n-Py2oX075oPM4LAYNcHXuDKwtyLXOe1h58FcP1eyicjFGW-1EvxweqpkQ86pEqVdsd16LaZX8Q88nzNLqhKoqlW1YrnMGBSmJQcGkypCqXGll1cOe6HuHgDWQ6xLux1075vhIF2nMNGKL3YMwoTXASjI6aBlJvyAVdDWHGH66x9BpQdwU8SXufNqv_CZyje1EQYAl0hSCSR-aRn_-F4rZNiIkySCWvmM4pERjj_pUsEzydwygBP5Z2vIb2B4teUcCPiV3XDebnyK5cSSeLR9jgV0ZhgHixcRRN92dN7MFYjtZw5faHdA8hZA=s400-no"
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
                        <Box width="300px" mx={3}>
                            <PostCard title={blogPost.title}
                                      intro={blogPost.intro}
                                      image={blogPost.image}
                                      bg={blogPost.imageColor}/>
                        </Box>
                    ))}
                </Masonry>
            </Box>
        </Flex>
    </Box>
};

export default Home;
