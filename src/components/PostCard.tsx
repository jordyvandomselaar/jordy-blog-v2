import React, {FunctionComponent} from "react";
import Box from "./Box";
import Image from "./Image";
import Text from "./Text";
import styled from "styled-components";

export interface PostCardProps {
    title: string;
    image: string;
    intro: string;
    bg?: string;
}

const CoverImage = styled(Image)`
  object-fit: contain;
`

const PostCard: FunctionComponent<PostCardProps> = ({image, intro, title, bg}) => {
    return (
        <Box width="100%" height="100%" boxShadow="0px 3px 10px rgba(0,0,0,.3)" borderRadius="10px" overflow="hidden">
            <Box width="100%" height={200} bg={bg}>
                <CoverImage src={image} height="100%" width="100%" alt="Cover image"/>
            </Box>
            <Box px={10}>
                <Text as="h3" variant="title">{title}</Text>
                <Text>
                    {intro}
                </Text>
            </Box>
        </Box>
    );
};

export default PostCard;
