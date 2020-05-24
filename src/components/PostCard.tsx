import React, { FunctionComponent } from "react";
import Box from "./Box";
import Image from "./Image";
import Text from "./Text";
import styled from "styled-components";

export interface PostCardProps {
    title: string;
    image: string;
    intro: string;
    date: string;
    readTime: string;
    bg?: string;
}

const CoverImage = styled(Image)`
    object-fit: contain;
`;

const PostCard: FunctionComponent<PostCardProps> = ({
    image,
    intro,
    title,
    bg,
    date,
    readTime,
}) => {
    return (
        <Box
            width="100%"
            height="100%"
            boxShadow="0px 3px 20px rgba(0,0,0,.5)"
            borderRadius="10px"
            overflow="hidden"
        >
            <Box width="100%" height={200} bg={bg}>
                <CoverImage
                    src={image}
                    height="100%"
                    width="100%"
                    alt="Cover image"
                />
            </Box>
            <Box px={10}>
                <Text fontSize={12}>
                    {date}&nbsp;-&nbsp;{readTime}
                </Text>
                <Text as="h3" variant="h3">
                    {title}
                </Text>
                <Text>{intro}</Text>
            </Box>
        </Box>
    );
};

export default PostCard;
